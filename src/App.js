import { Box, Divider, Grid, ThemeProvider } from "@mui/material";
import theme from "theme";
import PostCard from "components/post-card/PostCard";
import Page from "components/layouts/Page";
import { formatPostDate, getReadingTime } from "utils/dateUtils";

const post = {
    author: {
        name: "Nanok Charles",
        avatar: null,
    },
    image: "/logo512.png",
    title: "Les fleurs de tournesol qu'on rêvait de voir - dlsd khlkshdkshl kdhklqd klqhk ldlqk dhlkslqk hsklj qljd kls",
    description:
        "L'histoire de trois enfants qui voulaient voir les tournesols dont ils entendaient dans les histoires de leurs parents se retrouvent mélé à une sombre histoire de trafique",
    createdAt: formatPostDate(new Date()),
    readingTime: getReadingTime("Hello world"),
    tags: [
        {
            name: "Tag",
        },
    ],
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Page>
                <Grid container>
                    <Grid md={8} px={5}>
                        <PostCard post={post} />
                    </Grid>
                    <Grid md={4} pl={2}>
                        <PostCard isMini post={post} />
                    </Grid>
                </Grid>
            </Page>
        </ThemeProvider>
    );
}

export default App;
