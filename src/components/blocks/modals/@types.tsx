import { MouseEventHandler } from 'react';

export interface IModal {
  isShowing: boolean;
  hide: MouseEventHandler;
}
