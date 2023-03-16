import { Box, Divider, Stack } from "@mui/material";
import Page from "components/layouts/Page";
import ThreadSection from "./sections/ThreadSection";
import SuggestionSection from "./sections/SuggestionSection";
import FeaturedSection from "./sections/FeaturedSection";

const HomePage = () => {
    return (
        <Page>
            <Stack divider={<Divider flexItem orientation="horizontal" />} spacing={8} my={6}>
                <Box>
                    <FeaturedSection />
                </Box>
                <Stack
                    direction={"row"}
                    divider={<Divider flexItem orientation="vertical" />}
                >
                    <Box
                        sx={{
                            width: {
                                md: "65%",
                                xs: "100%",
                            },
                        }}
                    >
                        <ThreadSection />
                    </Box>
                    <Box
                        sx={{
                            display: {
                                md: "flex",
                                xs: "none",
                            },
                            width: "35%",
                        }}
                    >
                        <SuggestionSection />
                    </Box>
                </Stack>
            </Stack>
        </Page>
    );
};

export default HomePage;
