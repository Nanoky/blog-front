import Heading, { Level } from "@tiptap/extension-heading";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        heading1: {
            /**
             * Toggle a heading node
             */
            toggleHeading1: () => ReturnType;
        };
        heading2: {
            /**
             * Toggle a heading node
             */
            toggleHeading2: () => ReturnType;
        };
    }
}

const level1: Level[] = [1];
const level2: Level[] = [2];

export const Heading1 = Heading.extend({
    name: "heading1",
    addOptions() {
        return {
            ...this.parent?.(),
            levels: level1,
        };
    },

    addCommands() {
        return {
            toggleHeading1:
                () =>
                ({ commands }) => {
                    return commands.toggleNode(this.name, "paragraph", {level: level1[0]});
                },
        };
    },
});

export const Heading2 = Heading.extend({
    name: "heading2",

    addOptions() {
        return {
            ...this.parent?.(),
            levels: level2,
        };
    },

    addCommands() {
        return {
            toggleHeading2:
                () =>
                ({ commands }) => {
                    return commands.toggleNode(this.name, "paragraph", {level: level2[0]});
                },
        };
    },
});
