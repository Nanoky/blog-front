import { BLOG_SERVICE_NAME } from "providers/blogProvider";
import useHttp from "./useHttp";
import useInfiniteScroll from "./useInfiniteScroll";
import { useCallback, useEffect } from "react";
import { BlogResponse, QueryParams, getPost } from "services/blogService";
import { Post } from "models/Post";

export const useGetPost = () => {
    const http = useHttp<BlogResponse, QueryParams>(BLOG_SERVICE_NAME, new BlogResponse());

    const get = useCallback((page: number, size: number) => {
        return http.call(getPost, {
            page: page,
            pageSize: size
        });
    }, [http]);

    return {get, response: http.response, loading: http.loading, error: http.error}
}

export const usePostThread = () => {
    const query = useGetPost();

    const items = useInfiniteScroll<Post>(query.get, query.response.articles);

    useEffect(() => {
        console.log(query.error);
    }, [query.error]);

    return {items, loading: query.loading, error: query.error};
}
