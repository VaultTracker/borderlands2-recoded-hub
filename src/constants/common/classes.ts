export const BL2_CLASSES = ['axton', 'gaige', 'krieg', 'maya', 'salvador', 'zer0'] as const;

export type Bl2ClassType = (typeof BL2_CLASSES)[number];
