import { formatPostDate, getReadingTime } from "utils/dateUtils";
import HttpService from "./http";
import { Post } from "models/Post";

export interface QueryParams {
    page: number;
    pageSize: number;
}

const convertItem = (item: any) => {
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

export class BlogResponse {
    status: string = '';
    totalResuls: number = 0;
    articles: Post[] = [];
}

export const getPost = (service: HttpService, params: QueryParams) => {
    return service.get<BlogResponse>(
        `/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=${params.pageSize}&page=${params.page}`,
        undefined,
        (data: any, status: number) => {
            return {
                status: data?.status,
                totalResuls: data?.totalResults,
                articles: data?.articles?.map((article: any) => convertItem(article))
            }
        },
        (err) => {
            throw err;
        }
    );
};
