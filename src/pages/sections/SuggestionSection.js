import {
    Box,
    Chip,
    Divider,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const categories = [
    {
        label: "Programming",
    },
    {
        label: "Get started",
    },
    {
        label: "For beginners",
    },
    {
        label: "Trend tech",
    },
    {
        label: "For entrepreneur",
    },
    {
        label: "Cyber security",
    },
    {
        label: "Tools",
    },
    {
        label: "Mobile apps",
    },
    {
        label: "Social media",
    },
    {
        label: "UI/UX",
    },
];

const links = [
    {
        label: "Contact",
    },
    {
        label: "Privacy",
    },
    {
        label: "Terms",
    },
    {
        label: "About",
    },
];

const SuggestionSection = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <Stack
                divider={<Divider orientation="horizontal" />}
                px={3}
                spacing={3}
                sx={{
                    position: "sticky",
                    top: 100,
                }}
            >
                <Box>
                    <Typography variant="h5">
                        {t("Discover more of what matters to you")}
                    </Typography>
                    <Grid container spacing={1} mt={1}>
                        {categories.map((category) => (
                            <Grid key={category.label} item>
                                <Chip label={t(category.label)} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {links.map((link) => (
                            <Grid key={link.label} item>
                                <Link
                                    color={"inherit"}
                                    underline="none"
                                    href="#"
                                    variant="body2"
                                >
                                    {t(link.label)}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
};

export default SuggestionSection;
