import { Stack, Typography } from "@mui/material";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const PostContent = ({ post, mini = false }) => {
    return (
        <Stack spacing={mini ? 1 : 2}>
            <PostHeader author={post?.author} mini={mini} />
            <Stack spacing={1} pb={mini ? 0 : 1}>
                <Typography
                    variant={mini ? "h5" : "h4"}
                    sx={{
                        WebkitLineClamp: 3,
                    }}
                >
                    {post?.title}
                </Typography>
                {!mini && (
                    <Typography
                        variant="body2"
                        sx={{
                            WebkitLineClamp: 3,
                        }}
                    >
                        {post?.description}
                    </Typography>
                )}
            </Stack>
            <PostFooter
                date={post?.createdAt}
                time={post?.readingTime}
                tag={post?.tags?.[0]}
                mini={mini}
            />
        </Stack>
    );
};

export default PostContent;
