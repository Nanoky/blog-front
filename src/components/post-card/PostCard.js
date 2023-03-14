import { Box, CardMedia, Stack, styled } from "@mui/material";
import PostContent from "./PostContent";

const IMAGE_SIZE = 112;

const CardImage = styled(CardMedia)(({ theme }) => ({
    width: IMAGE_SIZE,
    maxHeight: IMAGE_SIZE,
}));

const PostCard = ({ post, isMini = false }) => {
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
                            <CardImage
                                component={"img"}
                                image={post?.image}
                                alt={post?.title}
                            />
                        </Box>
                    )}
                </Stack>
            )}
        </>
    );
};

export default PostCard;
