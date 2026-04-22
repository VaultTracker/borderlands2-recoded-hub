import type { HTMLAttributes } from 'react';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      gamechanger: HTMLAttributes<HTMLElement>;
      health: HTMLAttributes<HTMLElement>;
      corrosive: HTMLAttributes<HTMLElement>;
      shock: HTMLAttributes<HTMLElement>;
      slag: HTMLAttributes<HTMLElement>;
      explosive: HTMLAttributes<HTMLElement>;
      incendiary: HTMLAttributes<HTMLElement>;
      skill: HTMLAttributes<HTMLElement>;
      'action-skill': HTMLAttributes<HTMLElement>;
    }
  }
}
