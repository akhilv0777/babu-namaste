import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      light: HTMLAttributes<HTMLElement>;
      room: HTMLAttributes<HTMLElement>;
      wall: HTMLAttributes<HTMLElement>;
    }
  }
}