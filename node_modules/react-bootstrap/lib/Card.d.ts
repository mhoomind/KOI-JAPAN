import * as React from 'react';
import type { DynamicRefForwardingComponent } from '@restart/ui/types';
import type { Color, Variant } from './types';
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Element used to render the component.
     */
    as?: React.ElementType | undefined;
    /**
     * @default 'card'
     */
    bsPrefix?: string | undefined;
    /**
     * Sets card background
     *
     * @type {'primary' | 'secondary' | 'success' |'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined}
     */
    bg?: Variant | undefined;
    /**
     * Sets card text color
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | undefined}
     */
    text?: Color | undefined;
    /**
     * Sets card border color
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined}
     */
    border?: Variant | undefined;
    /**
     * When this prop is set, it creates a Card with a Card.Body inside
     * passing the children directly to it
     */
    body?: boolean | undefined;
}
declare const _default: DynamicRefForwardingComponent<"div", CardProps> & {
    Img: DynamicRefForwardingComponent<"img", import("./CardImg").CardImgProps>;
    Title: DynamicRefForwardingComponent<"div", import("./CardTitle").CardTitleProps>;
    Subtitle: DynamicRefForwardingComponent<"div", import("./CardSubtitle").CardSubtitleProps>;
    Body: DynamicRefForwardingComponent<"div", import("./CardBody").CardBodyProps>;
    Link: DynamicRefForwardingComponent<"a", import("./CardLink").CardLinkProps>;
    Text: DynamicRefForwardingComponent<"p", import("./CardText").CardTextProps>;
    Header: DynamicRefForwardingComponent<"div", import("./CardHeader").CardHeaderProps>;
    Footer: DynamicRefForwardingComponent<"div", import("./CardFooter").CardFooterProps>;
    ImgOverlay: DynamicRefForwardingComponent<"div", import("./CardImgOverlay").CardImgOverlayProps>;
};
export default _default;
