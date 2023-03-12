import {
    Divider,
    Drawer,
    IconButton,
    List,
    Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DRAWER_WIDTH } from "contants";
import { useState } from "react";
import Logo from "./Logo";

const DrawerMenu = () => {
    const [anchorNavEl, setAnchorNavEl] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorNavEl(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        setAnchorNavEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={Boolean(anchorNavEl)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: DRAWER_WIDTH,
                    },
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Toolbar>
                    <Logo />
                </Toolbar>
                <Divider />
                <List></List>
            </Drawer>
        </>
    );
};

export default DrawerMenu;
