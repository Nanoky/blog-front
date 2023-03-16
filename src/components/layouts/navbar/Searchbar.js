import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
const {
    Box,
    TextField,
    InputAdornment,
    styled,
} = require("@mui/material");

const paddingVertical = 8;

const CustomTextField = styled(TextField)(({theme}) => ({
    "& .MuiFilledInput-input": {
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        fontSize: theme.typography.body2.fontSize
    },
    "& .MuiFilledInput-root": {
        borderRadius: 20,
    }
}));

const Searchbar = ({ onSearch }) => {
    const { t } = useTranslation();

    const handleSearch = ({ target }) => {
        onSearch(target.value);
    };

    return (
        <Box>
            <CustomTextField
                placeholder={t("Search")}
                onChange={handleSearch}
                hiddenLabel
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            sx={{
                                mr: 1,
                                mt: 0,
                            }}
                        >
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="filled"
            />
        </Box>
    );
};

export default Searchbar;
