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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderRadius: 20
                }
            }
        }
    }
});

export default theme;
