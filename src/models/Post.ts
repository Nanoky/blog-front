import { formatPostDate, getReadingTime } from "utils/dateUtils";

export class Author {
    avatar: string;
    name: string;
    group: string;

    constructor(name: string, avatar: string, group: string) {
        this.name = name;
        this.avatar = avatar;
        this.group = group;
    }

    static convertFrom = (item: any) => {
        return new Author(item.name, item.avatar, item.group);
    };
}

export class Tag {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    static convertFrom = (item: any) => {
        return new Tag(item.name);
    };
}

export class Post {
    image: string;
    title: string;
    description: string;
    createdAt: string;
    author: Author;
    tags: Tag[];
    readingTime: string;

    constructor(
        title: string,
        description: string,
        image: string,
        createdAt: string,
        author: Author,
        tags: Tag[],
        readingTime: string
    ) {
        this.author = author;
        this.createdAt = createdAt;
        this.description = description;
        this.image = image;
        this.tags = tags;
        this.title = title;
        this.readingTime = readingTime;
    }

    static convertFrom = (item: any) => {
        return new Post(
            item.title,
            item.description,
            item.urlToImage,
            formatPostDate(item.publishedAt),
            Author.convertFrom({
                name: item?.author,
                avatar: null,
                group: null,
            }),
            [Tag.convertFrom(item.source)],
            getReadingTime(item?.content)
        );
    };
}
