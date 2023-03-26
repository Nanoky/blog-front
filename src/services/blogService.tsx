import HttpService from "./http";
import { Post } from "models/Post";

export interface QueryParams {
    page: number;
    pageSize: number;
}

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
                articles: data?.articles?.map((article: any) => Post.convertFrom(article))
            }
        },
        (err) => {
            throw err;
        }
    );
};
