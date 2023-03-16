import {
    Box,
    CircularProgress,
    Divider,
    Stack,
} from "@mui/material";
import PostCard from "components/post-card/PostCard";
import { usePostThread } from "hooks/usePost";

const ThreadSection = () => {
    const thread = usePostThread();

    return (
        <Box px={8}>
            <Stack
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={4}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {thread.items.map((item, index) => (
                    <PostCard key={index} post={item} />
                ))}
                {thread.loading && <CircularProgress />}
            </Stack>
        </Box>
    );
};

export default ThreadSection;
