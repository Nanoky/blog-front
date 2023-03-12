import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
const {
    Box,
    TextField,
    InputAdornment,
    styled,
} = require("@mui/material");

const CustomTextField = styled(TextField)({
    "& .MuiFilledInput-input": {
        paddingTop: 10,
        paddingBottom: 10,
    },
    "& .MuiFilledInput-root": {
        borderRadius: 20
    }
});

const Searchbar = ({ onSearch, color }) => {
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
                                color: color,
                            }}
                        >
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    color: color,
                }}
                variant="filled"
            />
        </Box>
    );
};

export default Searchbar;
