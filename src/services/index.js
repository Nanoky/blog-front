import { get } from "./api"


export const getPost = (page, pageSize = 10) => {
    return get(`/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=${pageSize}&page=${page}`);
}