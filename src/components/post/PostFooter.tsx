import {
    Box,
    Button,
    Chip,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Tag } from "models/Post";
import React from "react";

interface Props {
    tags?: Tag[];
    nbLike: number;
    nbComment: number;
}

const PostFooter = ({ tags, nbLike, nbComment }: Props) => {
    return (
        <Stack spacing={4}>
            <Box>
                <Stack direction={"row"} spacing={1}>
                    {tags?.map((tag) => (
                        <Chip key={tag.name} label={tag.name} />
                    ))}
                </Stack>
            </Box>
            <Box>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                        <Stack direction={"row"} spacing={2}>
                            <Button startIcon={<FavoriteBorderIcon />}>
                                <Typography>{nbLike}</Typography>
                            </Button>
                            <Button startIcon={<CommentIcon />}>
                                <Typography>{nbComment}</Typography>
                            </Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={"row"} spacing={2}>
                            <IconButton>
                                <IosShareIcon />
                            </IconButton>
                            <IconButton>
                                <BookmarkAddIcon></BookmarkAddIcon>
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default PostFooter;
