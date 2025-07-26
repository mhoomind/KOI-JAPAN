import * as React from 'react';
import type { DynamicRefForwardingComponent } from '@restart/ui/types';
import type { BsDropdownProps } from './types';
export interface DropdownProps extends BsDropdownProps, Omit<React.HTMLAttributes<HTMLElement>, 'onSelect' | 'children' | 'onToggle'> {
}
declare const _default: DynamicRefForwardingComponent<"div", DropdownProps> & {
    Toggle: DynamicRefForwardingComponent<"button", import("./DropdownToggle").DropdownToggleProps>;
    Menu: DynamicRefForwardingComponent<"div", import("./DropdownMenu").DropdownMenuProps>;
    Item: DynamicRefForwardingComponent<"a", import("./DropdownItem").DropdownItemProps>;
    ItemText: DynamicRefForwardingComponent<"span", import("./DropdownItemText").DropdownItemTextProps>;
    Divider: DynamicRefForwardingComponent<"hr", import("./DropdownDivider").DropdownDividerProps>;
    Header: DynamicRefForwardingComponent<"div", import("./DropdownHeader").DropdownHeaderProps>;
};
export default _default;
