# nextjs-ssg-template

Next.js 기반 **정적 사이트(SSG / `next export`)** 보일러플레이트입니다. UI는 **Tailwind CSS v3**와 **shadcn/ui**(New York 스타일)를 사용하고, 레거시 브라우저용 **폴리필 번들**을 빌드 단계에서 생성합니다.

## 포함 스택

| 영역 | 내용 |
|------|------|
| 프레임워크 | [Next.js](https://nextjs.org) 16(App Router), [React](https://react.dev) 19 |
| 스타일 | Tailwind CSS 3, CSS 변수 기반 테마, `tailwindcss-animate` |
| 컴포넌트 | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev) |
| 폼·검증 | [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev), `@hookform/resolvers` |
| 상태·데이터 | [TanStack Query](https://tanstack.com/query), [Jotai](https://jotai.org), [Zustand](https://zustand-demo.pmnd.rs) |
| 기타 UI | `next-themes`, `sonner`, `cmdk`, `vaul`, `react-day-picker`, `overlay-kit` |
| 품질 | ESLint(`eslint-config-next`), Prettier, Stylelint, Husky, lint-staged |

## 빌드·배포 특성

- **`output: 'export'`** — 순수 정적 HTML/JS/CSS 산출물로 배포 가능합니다.
- **`distDir: 'dist'`** — 빌드 결과물은 기본적으로 `dist/`에 생성됩니다.
- **`images.unoptimized: true`** — 정적보내기에 맞춘 이미지 설정입니다.
- **폴리필** — `npm run build` 시 `scripts/build-polyfills.mjs`가 `public/polyfills/`에 `legacy`·`modern` 번들을 만듭니다. 루트 레이아웃의 `PolyfillLoader`가 이를 로드합니다.

## 시작하기

### 요구 사항

- [Node.js](https://nodejs.org/) (LTS 권장)

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

### 프로덕션 빌드

```bash
npm run build
```

폴리필 생성 후 Next 빌드가 실행되며, 결과는 `dist/`에 출력됩니다.

```bash
npm run start
```

로컬에서 프로덕션 빌드를 검증할 때 사용합니다.

## npm 스크립트

| 스크립트 | 설명 |
|----------|------|
| `dev` | 개발 서버 (`next dev`) |
| `build` | 폴리필 빌드 + `next build` (정적보내기) |
| `build:polyfills` | 폴리필만 생성 |
| `start` | 프로덕션 서버 (`next start`) |
| `lint` | ESLint |
| `clean` | `dist/` 정리 |
| `devextreme:theme` | DevExtreme 커스텀 테마 CSS 생성(프로젝트에 포함된 경로 기준) |

## 디렉터리 개요

```
src/
  app/           # App Router — 페이지·레이아웃·메타데이터
  components/  # 공용 컴포넌트(ui, core 등)
  lib/           # 유틸(예: shadcn `cn` 등)
  styles/        # 전역·Tailwind 진입 CSS
public/
  polyfills/     # 빌드 시 생성되는 폴리필 스크립트
scripts/
  build-polyfills.mjs
```

TypeScript 경로 별칭: `@/*` → `./src/*` (`tsconfig.json`).

## shadcn/ui

설정은 루트의 `components.json`을 따릅니다. 컴포넌트 추가는 [shadcn CLI](https://ui.shadcn.com/docs/cli) 문서를 참고하세요.

## Git 훅

`prepare` 스크립트로 Husky가 설정됩니다. 커밋 전에 `lint-staged`가 지정된 확장자에 대해 Prettier·ESLint를 실행합니다.

## 배포

정적 산출물이므로 **S3 + CloudFront**, **GitHub Pages**, **Netlify**, **Vercel(정적)** 등 정적 호스팅에 `dist/` 내용을 업로드하면 됩니다. 호스트별 루트 경로·리라이트 규칙은 환경에 맞게 조정하세요.

## 참고 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Next.js 정적보내기](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

---

이 저장소는 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 시작한 뒤, SSG·스타일·도구 체인을 프로젝트 목적에 맞게 확장한 템플릿입니다.
