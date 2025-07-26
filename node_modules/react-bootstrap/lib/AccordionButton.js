"use client";

import * as React from 'react';
import { useContext } from 'react';
import clsx from 'clsx';
import AccordionContext, { isAccordionItemSelected } from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';
import { useBootstrapPrefix } from './ThemeProvider';
import useAccordionButton from './useAccordionButton';
import { jsx as _jsx } from "react/jsx-runtime";
const AccordionButton = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = useContext(AccordionItemContext);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = useContext(AccordionContext);
  if (Component === 'button') {
    props.type = 'button';
  }
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: clsx(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';
export default AccordionButton;