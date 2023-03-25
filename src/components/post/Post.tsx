import { Post as PostModel } from "models/Post";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import React from "react";
import { Stack } from "@mui/material";

interface Props {
    value?: PostModel
}

const Post = ({value}: Props) => {

    return (
        <Stack>
             <PostHeader author={value?.author} />
             <PostContent post={value} />
             <PostFooter tags={value?.tags} nbComment={0} nbLike={0} />
        </Stack>
    )
}

export default Post;