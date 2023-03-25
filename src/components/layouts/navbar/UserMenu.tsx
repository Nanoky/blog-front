import {
    Box,
    Button,
    IconButton,
    Menu,
    Stack,
    Typography,
} from "@mui/material";
import { APP_NAME } from "contants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

const UserMenu = () => {
    const [anchorUserEl, setAnchorUserEl] = useState<HTMLButtonElement | null>(null);
    const { t } = useTranslation();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorUserEl(() => event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorUserEl(null);
    };

    return (
        <Box>
            <IconButton
                size="large"
                color="inherit"
                onClick={handleOpenUserMenu}
            >
                <PersonIcon />
            </IconButton>
            <Menu
                anchorEl={anchorUserEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorUserEl)}
                onClose={handleCloseUserMenu}
            >
                <Box>
                    <Stack justifyContent={"center"} mx={3} my={4} spacing={2}>
                        <Typography
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            {t(`Get started on ${APP_NAME}`)}
                        </Typography>
                        <Button variant="contained">{t("Sign up")}</Button>
                        <Button variant="outlined">{t("Sign in")}</Button>
                    </Stack>
                </Box>
            </Menu>
        </Box>
    );
};

export default UserMenu;
