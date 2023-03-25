import { Box, Divider, Stack } from "@mui/material";
import ThreadSection from "./sections/ThreadSection";
import SuggestionSection from "./sections/SuggestionSection";
import FeaturedSection from "./sections/FeaturedSection";
import React from "react";

const HomePage = () => {
    return (
        <Stack
            divider={<Divider flexItem orientation="horizontal" />}
            spacing={8}
            my={6}
        >
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
    );
};

export default HomePage;
