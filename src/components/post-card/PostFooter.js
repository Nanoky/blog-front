import {
    Box,
    Chip,
    IconButton,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useTranslation } from "react-i18next";

const PostFooter = ({ date, time, tag, mini = false }) => {
    const { t } = useTranslation();

    const handleBookmark = () => {};

    const handleTagClicked = () => {};

    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {!mini && tag && (
                    <Chip label={t(tag?.name)} onClick={handleTagClicked} />
                )}
                <Typography variant={mini ? "subtitle2" : "subtitle1"}>
                    {date && time ? `${date} . ${time}` : <Skeleton />}
                </Typography>
            </Stack>
            {!mini && (
                <Box>
                    {date && time ? (
                        <IconButton onClick={handleBookmark}>
                            <BookmarkAddIcon />
                        </IconButton>
                    ) : (
                        <Skeleton>
                            <IconButton>
                                <BookmarkAddIcon />
                            </IconButton>
                        </Skeleton>
                    )}
                </Box>
            )}
        </Stack>
    );
};

export default PostFooter;
