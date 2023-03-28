import { Link } from "@mui/material";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from "react-router-dom";
import React, { ReactNode } from "react";
import { ROUTE_HOME } from "routes";

type Underline = "always" | "hover" | "none";

interface Props extends RouterLinkProps {
    children: ReactNode;
    underline?: Underline;
}

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
    (props, ref) => <RouterLink ref={ref} to={ROUTE_HOME} {...props} />
);

const CustomLink = ({ children, underline, ...props }: Props) => {
    return (
        <Link
            component={LinkBehavior}
            {...props}
            underline={underline}
            color={"inherit"}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
