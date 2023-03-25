export class Author {
    avatar: string;
    name: string;
    group: string;

    constructor(name: string, avatar: string, group: string) {
        this.name = name;
        this.avatar = avatar;
        this.group = group;
    }
}

export class Tag {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
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
}
