import { Avatar, Box, Skeleton, Stack, Typography, TypographyVariant } from "@mui/material";
import { Author } from "models/Post";
import React from "react";
import { useTranslation } from "react-i18next";

const variantMini: TypographyVariant = 'subtitle1';
const variantNormal: TypographyVariant = 'body2';

const avatarSize = {
    mini: 25,
    normal: 30,
};

interface Props {
    author?: Author;
    mini?: boolean;
}

const PostHeader = ({ author, mini = false }: Props) => {
    const { t } = useTranslation();

    const handleAuthorClicked = () => {};
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {author ? (
                <Avatar
                    onClick={handleAuthorClicked}
                    src={author?.avatar}
                    alt={author?.name}
                    sx={{
                        width: mini ? avatarSize.mini : avatarSize.normal,
                        height: mini ? avatarSize.mini : avatarSize.normal,
                    }}
                >
                    {author?.name}
                </Avatar>
            ) : (
                <Skeleton>
                    <Avatar />
                </Skeleton>
            )}
            <Box
                sx={{
                    flexDirection: "row",
                }}
                onClick={handleAuthorClicked}
            >
                <Typography
                    variant={mini ? variantMini : variantNormal}
                    sx={{
                        fontWeight: 500,
                    }}
                >
                    {author ? `${author?.name}` : <Skeleton />}
                </Typography>
                {author?.group && (
                    <>
                        <Typography
                            variant={
                                mini ? variantMini : variantNormal
                            }
                        >
                            {t("in")}
                        </Typography>
                        <Typography
                            variant={
                                mini ? variantMini : variantNormal
                            }
                            sx={{
                                fontWeight: 500,
                            }}
                        >
                            {author?.group}
                        </Typography>
                    </>
                )}
            </Box>
        </Stack>
    );
};

export default PostHeader;
