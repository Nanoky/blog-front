import { Typography } from "@mui/material";
import CustomLink from "components/common/Link";
import { APP_NAME } from "contants";
import React from "react";
import { ROUTE_HOME } from "routes";


const Logo = () => {
    return (
        <CustomLink to={ROUTE_HOME} underline="none">
            <Typography color={'inherit'} variant="h3">{APP_NAME}</Typography>
        </CustomLink>
    )
}

export default Logo;