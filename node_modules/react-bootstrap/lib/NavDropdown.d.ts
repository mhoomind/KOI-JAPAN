import * as React from 'react';
import { DynamicRefForwardingComponent } from '@restart/ui/types';
import type { DropdownMenuVariant } from './DropdownMenu';
import type { BsDropdownProps } from './types';
export interface NavDropdownProps extends BsDropdownProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect' | 'children' | 'onToggle' | 'title'> {
    /**
     * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
     */
    id?: string | undefined;
    /**
     * The content of the non-toggle Button.
     */
    title: React.ReactNode;
    /**
     * Disables the toggle NavLink
     */
    disabled?: boolean | undefined;
    /**
     * Style the toggle NavLink as active
     */
    active?: boolean | undefined;
    /**
     * An ARIA accessible role applied to the Menu component.
     */
    menuRole?: string | undefined;
    /**
     * Whether to render the dropdown menu in the DOM before the first time it is shown
     */
    renderMenuOnMount?: boolean | undefined;
    /**
     *  Which event when fired outside the component will cause it to be closed.
     *
     * _see [DropdownMenu](#menu-props) for more details_
     */
    rootCloseEvent?: 'click' | 'mousedown' | undefined;
    /**
     * Menu color variant.
     *
     * Omitting this will use the default light color.
     */
    menuVariant?: DropdownMenuVariant | undefined;
}
declare const _default: DynamicRefForwardingComponent<"div", NavDropdownProps> & {
    Item: DynamicRefForwardingComponent<"a", import("./DropdownItem").DropdownItemProps>;
    ItemText: DynamicRefForwardingComponent<"span", import("./DropdownItemText").DropdownItemTextProps>;
    Divider: DynamicRefForwardingComponent<"hr", import("./DropdownDivider").DropdownDividerProps>;
    Header: DynamicRefForwardingComponent<"div", import("./DropdownHeader").DropdownHeaderProps>;
};
export default _default;
