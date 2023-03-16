import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const textVariant = {
    mini: "subtitle1",
    normal: "body2",
};

const avatarSize = {
    mini: 25,
    normal: 30,
};

const PostHeader = ({ author, mini = false }) => {
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
                    variant={mini ? textVariant.mini : textVariant.normal}
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
                                mini ? textVariant.mini : textVariant.normal
                            }
                        >
                            {t("in")}
                        </Typography>
                        <Typography
                            variant={
                                mini ? textVariant.mini : textVariant.normal
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
