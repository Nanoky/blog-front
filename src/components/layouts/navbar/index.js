import {
    AppBar,
    Box,
    Button,
    Container,
    Slide,
    Stack,
    Toolbar,
    styled,
    useScrollTrigger,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import EditIcon from "@mui/icons-material/Edit";
import Searchbar from "./Searchbar";
import UserMenu from "./UserMenu";
import DrawerMenu from "./DrawerMenu";
import Logo from "./Logo";

export function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const MenuButton = styled(Button)(({ theme }) => ({
    color: "inherit",
    fontSize: theme.typography.body2.fontSize,
}));

const Navbar = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: theme.palette.primary.light,
                color: theme.palette.secondary.contrastText,
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                        }}
                    >
                        <DrawerMenu />
                    </Box>

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Logo />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Box ml={"5%"} display={"flex"}>
                            <Searchbar />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 0,
                        }}
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={2}
                        >
                            <MenuButton
                                disableRipple={true}
                                startIcon={<EditIcon />}
                            >
                                {t("Write")}
                            </MenuButton>
                            <MenuButton
                                disableRipple={true}
                                variant="contained"
                                sx={{
                                    color: theme.palette.primary.contrastText,
                                }}
                            >
                                {t("Sign up")}
                            </MenuButton>
                            <MenuButton disableRipple={true}>
                                {t("Sign in")}
                            </MenuButton>
                            <UserMenu />
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
