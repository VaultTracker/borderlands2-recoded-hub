# GitHub Pages 배포 계획 (Astro `dist` 결과물 기준)

## 요구사항 재정의

- 이 프로젝트의 빌드 산출물(`dist`)을 GitHub Pages로 호스팅한다.
- 로컬에서 배포 전 테스트 가능한 절차를 포함한다.
- 수동 배포보다 재현 가능한 자동 배포(GitHub Actions) 중심으로 구성한다.
- 현재 저장소(`vaulttracker/borderlands2-recoded-hub`) 기준으로 설정한다.

## 현재 상태 점검 요약

- `package.json`에 `build` 스크립트(`astro build`)는 이미 존재한다.
- `astro.config.mjs`에 GitHub Pages 배포용 `site`, `base` 설정이 없다.
- 배포 워크플로우 파일(`.github/workflows/*.yml`)은 아직 없다.
- 정적 사이트 배포 대상 폴더는 기본값 `dist`로 이미 생성된다.

## 리스크 및 대응

- **HIGH**: `base` 미설정으로 정적 자산 경로가 깨질 수 있음
  - 대응: `base: '/borderlands2-recoded-hub'` 명시
- **MEDIUM**: `site` 미설정 시 sitemap/canonical URL 부정확 가능
  - 대응: `site: 'https://vaulttracker.github.io'` 설정
- **MEDIUM**: Pages 소스 설정이 Branch 모드일 경우 Actions 배포 실패 가능
  - 대응: GitHub Repository Settings에서 Pages Source를 GitHub Actions로 전환
- **LOW**: Node 버전 불일치로 CI 빌드 실패 가능
  - 대응: Actions에서 Node `22` 고정

## 구현 계획 (Step-by-step)

### Phase 1. Astro 배포 경로 정합성 확보

1. `astro.config.mjs`에 `site`와 `base`를 설정한다.
2. `base`는 레포지토리명(`/borderlands2-recoded-hub`)으로 맞춘다.
3. 상대/절대 경로 깨짐 여부를 로컬 미리보기로 확인한다.

### Phase 2. GitHub Actions 배포 파이프라인 구성

1. `.github/workflows/deploy-pages.yml` 생성
2. `push`(예: `main`) 및 수동 실행(`workflow_dispatch`) 트리거 설정
3. `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages` 조합으로 `dist` 배포
4. CI에서 `pnpm` 설치 및 `pnpm build` 수행

### Phase 3. 로컬 검증 절차 확립

1. `pnpm build`로 `dist` 생성
2. `pnpm preview` 또는 정적 서버로 렌더링 검증
3. 브라우저에서 하위 경로(`/borderlands2-recoded-hub/`) 기준 진입 동작 확인

### Phase 4. Repository/GitHub 설정 점검

1. GitHub Settings > Pages > Source를 GitHub Actions로 설정
2. Actions 권한에서 Pages 배포 허용 상태 확인
3. 첫 배포 후 `https://vaulttracker.github.io/borderlands2-recoded-hub/` 접근 확인

## 실행 명령 예시

```powershell
pnpm install
pnpm build
pnpm preview
```

## 완료 기준 (Definition of Done)

- `main` 브랜치 push 시 Actions가 성공적으로 완료된다.
- GitHub Pages URL에서 스타일/스크립트 404 없이 메인 페이지 렌더링된다.
- 라우팅/정적 자산이 `base` 경로 하에서 정상 동작한다.

## 의사코드 수준 구현 순서

```text
IF astro.config.mjs has no site/base:
  add site = "https://vaulttracker.github.io"
  add base = "/borderlands2-recoded-hub"

CREATE workflow deploy-pages.yml:
  on push to main
  setup node + pnpm
  install deps
  run build
  upload dist artifact
  deploy to github pages

RUN local validation:
  pnpm build
  pnpm preview
  verify assets under /borderlands2-recoded-hub/

CHECK repository pages settings:
  source == GitHub Actions
  first deployment URL returns 200
```

## 복잡도 추정

- 난이도: **Low-Medium**
- 예상 작업 시간: **30~60분** (최초 Actions 권한/Pages 설정 확인 포함)

## 확인 요청

이 계획대로 진행하면 다음 단계에서 실제 파일 수정(`astro.config.mjs`, `.github/workflows/deploy-pages.yml`)과 배포 테스트까지 진행한다.
