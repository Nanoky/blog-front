/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import HttpService from 'services/http';

export const BLOG_SERVICE_NAME = 'blog';
const BLOG_BASE_URL = 'https://newsapi.org';

export const useConfigBlog = (
    onServicesUpdate: (service: HttpService, name: string) => void,
    key?: string
) => {
    useEffect(() => {
        if (key) {
            onServicesUpdate(
                new HttpService({
                    baseUrl: BLOG_BASE_URL,
                    key: key,
                    keyType: 'Bearer'
                }),
                BLOG_SERVICE_NAME
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
};
