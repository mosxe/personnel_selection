import { ReactNode } from 'react';

export type Props = {
  isShow: boolean;
  onClose: (show: boolean) => void;
  children?: ReactNode;
  width?: string | undefined;
};

export type PropsChildren = {
  children?: ReactNode;
};
