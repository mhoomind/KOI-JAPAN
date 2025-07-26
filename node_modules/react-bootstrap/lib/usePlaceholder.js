"use client";

import clsx from 'clsx';
import { useBootstrapPrefix } from './ThemeProvider';
import useCol from './useCol';
export default function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'placeholder');
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: clsx(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
  };
}