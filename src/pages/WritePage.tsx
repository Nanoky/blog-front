import { Stack } from "@mui/material";
import ContentEditor from "components/editor/ContentEditor";
import TitleEditor from "components/editor/TitleEditor";
import React from "react";

const WritePage = () => {
    const handleTitleChange = () => {};
    const handleContentChange = () => {};

    return (
        <Stack>
            <TitleEditor onChange={handleTitleChange} />
            <ContentEditor onChange={handleContentChange} />
        </Stack>
    );
};

export default WritePage;
