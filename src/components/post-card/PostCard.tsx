import { Box, CardMedia, Skeleton, Stack } from "@mui/material";
import PostContent from "./PostContent";
import React from "react";
import { Post } from "models/Post";

const IMAGE_SIZE = 112;

interface Props {
    post?: Post;
    isMini?: boolean;
}

const PostCard = ({ post, isMini = false }: Props) => {
    return (
        <>
            {isMini ? (
                <PostContent post={post} mini={isMini} />
            ) : (
                <Stack direction={"row"} alignItems={"center"}>
                    <Box
                        sx={{
                            width: `calc(100% - ${
                                post?.image ? IMAGE_SIZE : 0
                            }px)`,
                        }}
                    >
                        <PostContent post={post} />
                    </Box>
                    {post?.image && (
                        <Box
                            sx={{
                                flexShrink: 0,
                                ml: 2,
                            }}
                        >
                            {post ? (
                                <CardMedia
                                    component={"img"}
                                    image={post?.image}
                                    alt={post?.title}
                                    sx={{
                                        width: IMAGE_SIZE,
                                        maxHeight: IMAGE_SIZE,
                                    }}
                                />
                            ) : (
                                <Skeleton
                                    variant="rectangular"
                                    width={IMAGE_SIZE}
                                    height={IMAGE_SIZE}
                                />
                            )}
                        </Box>
                    )}
                </Stack>
            )}
        </>
    );
};

export default PostCard;
