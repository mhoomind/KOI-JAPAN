import * as React from 'react';
import { DynamicRefForwardingComponent } from '@restart/ui/types';
import { FormCheckProps } from './FormCheck';
type SwitchProps = Omit<FormCheckProps, 'type'>;
declare const _default: DynamicRefForwardingComponent<DynamicRefForwardingComponent<"input", FormCheckProps> & {
    Input: DynamicRefForwardingComponent<"input", import("./FormCheckInput").FormCheckInputProps>;
    Label: React.ForwardRefExoticComponent<import("./FormCheckLabel").FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>>;
}, SwitchProps> & {
    Input: DynamicRefForwardingComponent<"input", import("./FormCheckInput").FormCheckInputProps>;
    Label: React.ForwardRefExoticComponent<import("./FormCheckLabel").FormCheckLabelProps & React.RefAttributes<HTMLLabelElement>>;
};
export default _default;
