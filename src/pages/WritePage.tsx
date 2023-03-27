import { Box, Stack } from "@mui/material";
import EditorBase from "components/editor/EditorBase";
import React from "react";

const width = "75%";

const WritePage = () => {

    const handleContentChange = () => {};

    return (
        <Stack alignItems={"center"} spacing={3} mt={5}>
            <Box
                sx={{
                    width: width,
                }}
            >
                <EditorBase
                    placeholder="Write something ..."
                    onHTMLChange={handleContentChange}
                    variants={{
                        p: "body1",
                        h2: "h4",
                        h1: "h3",
                    }}
                />
            </Box>
        </Stack>
    );
};

export default WritePage;
