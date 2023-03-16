import { useState } from "react";

const useHttp = (initialValue = null) => {
    const [response, setResponse] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const call = async (request) => {
        try {
            setLoading(true);

            const data = await request;

            if (data) setResponse(data);
        } catch (err) {
            const status = err?.response?.status;

            switch (status) {

                default:
                    break;
            }
            setResponse(null);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { call, response, loading, error };
};

export default useHttp;
