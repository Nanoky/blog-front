import React, { createContext, useCallback, useContext, useState } from 'react';
import HttpService from 'services/http';
import { KeysProps, useProviderConfig } from './configProvider';

interface providerProps {
    children: React.ReactNode;
    keys?: KeysProps
}

export interface ContextType {
    [name: string]: HttpService;
}

const ServiceContext = createContext<ContextType>({});

export const useService = (name: string) => {
    const services = useContext(ServiceContext)
    return services[name];
};

export const ServiceProvider = ({ keys, children }: providerProps) => {
    const [services, setServices] = useState<ContextType>({});

    const addService = useCallback((service: HttpService, name: string) => {
        setServices((prev) => getNewServices(prev, service, name));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [services]);

    const getNewServices = (
        prev: ContextType,
        service: HttpService,
        name: string
    ) => {
        const newServices : ContextType = {
            ...prev,
            [name]: service
        };
        return newServices;
    };

    useProviderConfig(addService, keys);

    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    );
};
