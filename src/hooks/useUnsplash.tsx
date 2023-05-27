/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-vars */
import useHttp, { useServiceEnabled } from './useHttp';
import { QueryParams, UnsplashResponse, searchUnsplash } from 'services/unsplashService';
import { useCallback } from 'react';
import { UNSPLASH_SERVICE_NAME } from 'providers/unsplashProvider';

interface HookResponse {
    search: (pattern: string, page?: number, perPage?: number) => void;
    response: UnsplashResponse;
    loading: boolean;
    error: any;
    reset: () => void
}

export const useSearch = (): HookResponse => {
    const http = useHttp<UnsplashResponse, QueryParams>(UNSPLASH_SERVICE_NAME, new UnsplashResponse());

    const search = useCallback((pattern: string, page?: number, perPage?: number) => {
        const params = {
            query: pattern,
            page: page,
            perPage: perPage
        }
        http.call(searchUnsplash, params);
    }, [http]);

    const reset = () => {
        http.reset?.();
    }

    return {
        search,
        response: http.response,
        loading: http.loading,
        error: http.error,
        reset
    };
};

export const useUnsplashEnabled = () => {
    return useServiceEnabled(UNSPLASH_SERVICE_NAME);
};
