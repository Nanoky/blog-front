import { lang } from "contants";
import moment from "moment"
import { readingTime } from "reading-time-estimator";


export const formatPostDate = (date: string) => {
    return moment(date).format("MMM D");
}

export const getReadingTime = (text: string) => {
    const t = readingTime(text, 200, lang).text;
    return t;
}