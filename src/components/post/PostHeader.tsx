import {
    Avatar,
    Box,
    IconButton,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import React from "react";
import { Author } from "models/Post";

const avatarSize = 40;

interface Props {
    author?: Author;
    date?: string;
    time?: string;
}

const PostHeader = ({ author, date, time }: Props) => {
    return (
        <Stack direction={"row"}>
            <Box>
                <Stack direction={"row"}>
                    {author ? (
                        <Avatar
                            src={author?.avatar}
                            alt={author?.name}
                            sx={{
                                width: avatarSize,
                                height: avatarSize,
                            }}
                        >
                            {author?.name}
                        </Avatar>
                    ) : (
                        <Skeleton>
                            <Avatar />
                        </Skeleton>
                    )}
                    <Stack>
                        <Typography>
                            {author ? `${author?.name}` : <Skeleton />}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            {date && time ? `${date} . ${time}` : <Skeleton />}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack direction={"row"}>
                    <Box>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                    <IconButton>
                        <BookmarkAddIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Stack>
    );
};

export default PostHeader;
