import { layout, measureNaturalWidth, prepare, prepareWithSegments } from '@chenglou/pretext';

import type { Item } from '@/stores/items.store';

type EstimateItemCardHeightParams = Item & { cardWidth: number; sources?: string[]; font?: string };

export function estimateItemCardHeight({
  cardWidth,
  name,
  rarity,
  redText,
  effect,
  origin,
  sources,
  font = 'pretendard',
}: EstimateItemCardHeightParams): number {
  const cardInnerWidth = cardWidth - 16 * 2;

  // ── badge: 텍스트 고유 너비 측정 ──────────────────────────
  const badgePrepared = prepareWithSegments(rarity, `12px ${font}`);
  const badgeTextWidth = measureNaturalWidth(badgePrepared); // ← 수정된 부분
  const badgeWidth = badgeTextWidth + 8 * 2;

  // ── title: flex: 1 남은 너비 사용 ─────────────────────────
  const titleWidth = cardInnerWidth - badgeWidth;
  const { height: titleHeight } = layout(prepare(name, `16px ${font}`), titleWidth, 24);

  const badgeHeight = 14 + 2 * 2; // line-height + margin: 2px 0
  const headerHeight = Math.max(titleHeight, badgeHeight) + 28;

  // ── redtext (conditional) ─────────────────────────────────
  const redTextHeight = redText ? layout(prepare(redText, `14px ${font}`), cardInnerWidth - 4, 20).height : 0;

  // ── content ───────────────────────────────────────────────
  const contentHeight = layout(prepare(effect, `14px ${font}`), cardInnerWidth, 20).height;

  // ── separator ─────────────────────────────────────────────
  const separatorHeight = 1;

  // ── bottom-content ────────────────────────────────────────
  const bottomContentHeight = layout(prepare(origin, `12px ${font}`), cardInnerWidth, 16).height;

  // ── bottom-list (conditional) ─────────────────────────────
  const bottomListHeight = sources && sources.length > 0 ? sources.length * 21 + (sources.length - 1) * 8 : 0;

  // ── 합산 ──────────────────────────────────────────────────
  const sections = [
    headerHeight,
    redTextHeight,
    contentHeight,
    separatorHeight,
    bottomContentHeight,
    bottomListHeight,
  ].filter((h) => h > 0);

  const totalHeight = sections.reduce((acc, h) => acc + h, 0);
  const gaps = (sections.length - 1) * 8;

  return 16 * 2 + totalHeight + gaps;
}
