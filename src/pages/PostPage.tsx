import { Box, Divider, Stack } from "@mui/material";
import Post from "components/post/Post";
import { useGetPost } from "hooks/usePost";
import React from "react";
import { useEffect } from "react";

const PostPage = () => {
    const query = useGetPost();

    useEffect(() => {
        query.get(1, 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack direction={"row"} divider={<Divider orientation="vertical" />}>
                <Box sx={{
                    width: {
                        md: "65%"
                    }
                }}>
                    <Post value={query.response?.articles?.[0]} />
                </Box>
            </Stack>
    );
};

export default PostPage;
