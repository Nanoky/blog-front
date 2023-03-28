import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, styled } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const paddingVertical = 8;

const CustomTextField = styled(TextField)(({theme} : any) => ({
    "& .MuiFilledInput-input": {
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        fontSize: theme.typography.body2.fontSize
    },
    "& .MuiFilledInput-root": {
        borderRadius: 20,
    }
}));

interface Props {
    onSearch?: (value: string) => void;
}

const Searchbar = ({ onSearch }: Props) => {
    const { t } = useTranslation();

    const handleSearch = ({ target } : React.ChangeEvent<HTMLInputElement>) => {
        onSearch?.(target.value);
    };

    return (
        <Box>
            <CustomTextField
                placeholder={`${t("Search")}`}
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
