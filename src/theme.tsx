import "@fontsource/source-serif-pro";
import "@fontsource/work-sans";
import { createTheme } from "@mui/material";

const HeaderFont = 'Work Sans';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: "#fff",
            main: "#4B84F4",
        },
        secondary: {
            main: "#FAFAFA",
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: "Source Serif Pro",
        htmlFontSize: 16,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 800,
            fontFamily: HeaderFont,
        },
        h2: {
            fontSize: "2.2rem",
            fontWeight: 700,
            fontFamily: HeaderFont,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: HeaderFont,
        },
        h4: {
            fontSize: "1.4rem",
            fontWeight: 700,
            fontFamily: HeaderFont,
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: HeaderFont,
        },
        h6: {
            fontSize: "1rem",
            fontFamily: HeaderFont,
        },
        body1: {
            fontSize: "1.2rem",
            fontWeight: 400,
        },
        body2: {
            fontSize: "1rem",
            fontWeight: 400,
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: "0.8rem",
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "0.9rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderRadius: 20,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                body2: {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                h4: {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                h5: {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
            },
        },
    },
});

export default theme;
