import HttpService from "services/http";
import { useConfigBlog } from "./blogProvider";
import { useConfigUnspash } from "./unsplashProvider";

export interface KeysProps {
    unsplashKey?: string;
    blogKey?: string
};



export const useProviderConfig = (
    onServicesUpdate: (service: HttpService, name: string) => void,
    keys?: KeysProps
) => {
    useConfigUnspash(onServicesUpdate, keys?.unsplashKey);
    useConfigBlog(onServicesUpdate, keys?.blogKey);
};
