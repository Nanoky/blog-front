import { lang } from "contants";
import moment from "moment"
import { readingTime } from "reading-time-estimator";


export const formatPostDate = (date) => {
    return moment(date).format("MMM D");
}

export const getReadingTime = (text) => {
    const t = readingTime(text, lang).text;
    return t;
}