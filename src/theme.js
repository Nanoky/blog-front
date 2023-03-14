import "@fontsource/source-serif-pro";
import "@fontsource/work-sans";
const { createTheme } = require("@mui/material");

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
            fontSize: "2rem",
        },
        h2: {
            fontSize: "1.5rem",
        },
        body1: {
            fontSize: "1.2rem",
            fontWeight: 400,
        },
        body2: {
            fontSize: "1rem",
            fontWeight: 400,
        },
        h4: {
            fontSize: "1.4rem",
            fontWeight: 700,
            fontFamily: "Work Sans",
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Work Sans",
        },
        h6: {
            fontSize: "1rem",
            fontFamily: "Work Sans",
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: "Work Sans",
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
            },
        },
    },
});

export default theme;
