import { useEffect, useState } from "react";

const nb = 5;

const useInfiniteScroll = <T,>(onLoad: (page:number, perPage: number) => void, response: T[]) => {
    const [items, setItems] = useState<T[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (response) {
            setItems((prevItems) => [...prevItems, ...response]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    useEffect(() => {
        onLoad(page, nb);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return items;
};

export default useInfiniteScroll;
