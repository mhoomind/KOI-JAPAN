import * as React from 'react';
import { type AbstractModalHeaderProps } from './AbstractModalHeader';
export interface OffcanvasHeaderProps extends AbstractModalHeaderProps {
    /**
     * @default 'offcanvas-header'
     */
    bsPrefix?: string | undefined;
}
declare const OffcanvasHeader: React.ForwardRefExoticComponent<OffcanvasHeaderProps & React.RefAttributes<HTMLDivElement>>;
export default OffcanvasHeader;
