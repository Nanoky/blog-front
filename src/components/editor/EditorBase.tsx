import { Box, useTheme } from "@mui/material";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import FormatMenuBase from "./menus/FormatMenu";
import InsertMenuBase from "./menus/InsertMenu";
import { CSSProperties, Variant } from "@mui/material/styles/createTypography";
import { Heading1, Heading2 } from "./extensions/Heading";
import "./styles/index.scss";
import CustomLink from "./extensions/Link";

interface ExtensionVariants {
    h1?: Variant;
    h2?: Variant;
    p?: Variant;
}

interface Props {
    placeholder?: string;
    initialContent?: string;
    onHTMLChange?: (code: string) => void;
    editable?: boolean;
    formatMenu?: React.ReactNode;
    insertMenu?: React.ReactNode;
    variants?: ExtensionVariants;
    autoFocus?: boolean;
    disableHeading?: boolean;
    disableInsert?: boolean;
    disableBold?: boolean;
    disableItalic?: boolean;
    disableLink?: boolean;
}

const styleToString = (style: CSSProperties) => {
    return Object.keys(style).reduce(
        (acc, key) =>
            acc +
            key
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase() +
            ":" +
            style[key] +
            ";",
        ""
    );
};

const EditorBase = ({
    placeholder,
    editable = true,
    formatMenu,
    insertMenu,
    initialContent,
    onHTMLChange,
    variants,
    autoFocus = false,
    disableBold = false,
    disableHeading = false,
    disableInsert = false,
    disableItalic = false,
    disableLink = false,
}: Props) => {
    const theme = useTheme();
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                paragraph: {
                    HTMLAttributes: {
                        ...(variants?.p && {
                            style: styleToString(theme.typography[variants.p]),
                        }),
                    },
                },
            }),
            Heading1.configure({
                HTMLAttributes: {
                    ...(variants?.h1 && {
                        style: styleToString(theme.typography[variants.h1]),
                    }),
                },
            }),
            Heading2.configure({
                HTMLAttributes: {
                    ...(variants?.h2 && {
                        style: styleToString(theme.typography[variants.h2]),
                    }),
                },
            }),
            Placeholder.configure({
                placeholder: placeholder,
            }),
            CustomLink.configure({
                openOnClick: editable ? false : true
            }),
            Image,
        ],
        editable: editable,
        onUpdate: ({ editor }) => {
            onHTMLChange?.(editor.getHTML());
        },
        content: initialContent,
        autofocus: autoFocus,
        /* editorProps: {
            attributes: {
                class: 'editor'
            }
        } */
    });

    return (
        <Box>
            {editor && (
                <React.Fragment>
                    {formatMenu ? (
                        formatMenu
                    ) : (
                        <FormatMenuBase
                            editor={editor}
                            disableBold={disableBold}
                            disableHeading={disableHeading}
                            disableItalic={disableItalic}
                            disableLink={disableLink}
                        />
                    )}
                    {insertMenu ? (
                        insertMenu
                    ) : (
                        <>
                            {!disableInsert && (
                                <InsertMenuBase editor={editor} />
                            )}
                        </>
                    )}
                </React.Fragment>
            )}
            <EditorContent editor={editor} />
        </Box>
    );
};

export default EditorBase;
