import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTranslation } from "react-i18next";
import { APP_NAME } from "contants";
import { useGetPost } from "hooks/usePost";
import PostCard from "components/post-card/PostCard";
import { useEffect } from "react";
import React from "react";
import { Post } from "models/Post";

interface GridItemProps {
    index: number;
    post?: Post;
}

const GridItem = ({ index, post }: GridItemProps) => {
    return (
        <Stack direction={"row"} spacing={2}>
            <Typography
                color={"secondary.dark"}
                sx={{
                    fontSize: 30,
                }}
            >
                {post ? `0${index}` : <Skeleton />}
            </Typography>
            <PostCard post={post} isMini={true} />
        </Stack>
    );
};

const FeaturedSection = () => {
    const { t } = useTranslation();
    const query = useGetPost();

    useEffect(() => {
        query.get(1, 6);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(query.response);
    }, [query.response]);

    return (
        <Box mx={3}>
            <Stack direction={"row"} spacing={1} mb={2} mx={5}>
                <TrendingUpIcon />
                <Typography variant="h5">{t(`Trending on ${APP_NAME}`)}</Typography>
            </Stack>
            <Grid container spacing={2}>
                {!query.loading ? (
                    <>
                        {query.response?.articles?.map((post, index) => (
                            <Grid item key={index} md={4}>
                                <GridItem post={post} index={index + 1} />
                            </Grid>
                        ))}
                    </>
                ) : (
                    <>
                        {Array(6)
                            .fill(0)
                            .map((post, index) => (
                                <Grid item key={index} md={4}>
                                    <GridItem post={undefined} index={index} />
                                </Grid>
                            ))}
                    </>
                )}
            </Grid>
        </Box>
    );
};

export default FeaturedSection;
