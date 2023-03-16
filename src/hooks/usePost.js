import { formatPostDate, getReadingTime } from "utils/dateUtils";
import useInfiniteScroll from "./useInfiniteScroll";
import { useEffect, useState } from "react";

const { getPost } = require("services");
const { default: useHttp } = require("./useHttp");

const convertItem = (item) => {
    return {
        author: {
            name: item?.author,
            avatar: null,
        },
        image: item?.urlToImage,
        title: item?.title,
        description: item?.description,
        createdAt: formatPostDate(item?.publishedAt),
        readingTime: getReadingTime(item?.content),
        tags: [item?.source],
    };
};

export const useGetPost = () => {
    const [posts, setPosts] = useState([]);
    const {call, response, loading, error} = useHttp([], convertItem);

    const get = (page, size) => {
        return call(getPost(page, size));
    }

    useEffect(() => {
        setPosts(response?.articles?.map(post => convertItem(post)))
    }, [response])

    return {get, response: posts, loading, error}
}

export const usePostThread = () => {
    const query = useGetPost();

    const items = useInfiniteScroll(query.get, query.response);

    useEffect(() => {
        console.log(query.error);
    }, [query.error]);

    return {items, loading: query.loading, error: query.error};
}
