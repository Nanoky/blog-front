import {
    IconButton,
    InputAdornment,
    SvgIconTypeMap,
    TextField,
} from "@mui/material";
import { BubbleMenu, Editor, isTextSelection } from "@tiptap/react";
import React, { KeyboardEvent, useCallback, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import CancelIcon from "@mui/icons-material/Cancel";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuButton, { MenuButtonProps } from "./MenuButton";

interface ButtonProps extends MenuButtonProps {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

const FormatButton = ({ Icon, ...props }: ButtonProps) => {
    return (
        <MenuButton
            {...props}
            iconComponent={() => <Icon fontSize="inherit" />}
        />
    );
};

interface MenuProps {
    editor: Editor;
    linkPlaceholder?: string;
    disableBold?: boolean;
    disableItalic?: boolean;
    disableLink?: boolean;
    disableHeading?: boolean;
}

type Level = 1 | 2;

const FormatMenuBase = ({
    editor,
    linkPlaceholder = "Past or type a link ...",
    disableBold = false,
    disableHeading = false,
    disableItalic = false,
    disableLink = false,
}: MenuProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const [linkValue, setLinkValue] = useState("");

    const handleBoldClick = useCallback(() => {
        editor.chain().focus().toggleBold().run();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);

    const handleItalicClick = useCallback(() => {
        editor.chain().focus().toggleItalic().run();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);

    const handleLinkClick = useCallback(() => {
        if (editor.isActive("link")) {
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .toggleLink({ href: linkValue, target: "_blank" })
                .run();
        } else {
            setShowMenu(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMenu]);

    const handleHeadingClick = useCallback(
        (level: Level) => {
            if (level === 1) editor.chain().focus().toggleHeading1().run();
            if (level === 2) editor.chain().focus().toggleHeading2().run();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [editor]
    );

    const handleSubmitLink = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            setShowMenu(false);

            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .toggleLink({ href: linkValue, target: "_blank" })
                .run();
        }
    };

    const handleLinkChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>) => {
        setLinkValue(target.value);
    };

    const handleClearField = useCallback(() => {
        setLinkValue("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linkValue]);

    return (
        <BubbleMenu
            editor={editor}
            shouldShow={({ editor, view, state, oldState, from, to }) => {
                // only show the bubble menu for selected text

                const { doc, selection } = state;
                const { empty } = selection;

                // Sometime check for `empty` is not enough.
                // Doubleclick an empty paragraph returns a node size of 2.
                // So we check also for an empty text size.
                const isEmptyTextBlock =
                    !doc.textBetween(from, to).length &&
                    isTextSelection(state.selection);

                // When clicking on a element inside the bubble menu the editor "blur" event
                // is called and the bubble menu item is focussed. In this case we should
                // consider the menu as part of the editor and keep showing the menu

                const hasEditorFocus = view.hasFocus();

                if (
                    !hasEditorFocus ||
                    empty ||
                    isEmptyTextBlock ||
                    !editor.isEditable ||
                    editor.isActive('image')
                ) {
                    return false;
                }

                return true;
            }}
        >
            {!showMenu ? (
                <React.Fragment>
                    <FormatButton
                        title="Bold"
                        Icon={FormatBoldIcon}
                        onClick={handleBoldClick}
                        active={editor.isActive("bold")}
                        disabled={disableBold || editor.isActive("heading")}
                    />
                    <FormatButton
                        title="Italic"
                        Icon={FormatItalicIcon}
                        onClick={handleItalicClick}
                        active={editor.isActive("italic")}
                        disabled={disableItalic || editor.isActive("heading")}
                    />
                    <FormatButton
                        title="Link"
                        Icon={InsertLinkIcon}
                        onClick={handleLinkClick}
                        active={editor.isActive("link")}
                        disabled={disableLink}
                    />
                    <FormatButton
                        title="H1"
                        Icon={FormatSizeIcon}
                        onClick={() => handleHeadingClick(1)}
                        active={editor.isActive("heading1")}
                        disabled={disableHeading}
                    />
                    <FormatButton
                        title="H2"
                        Icon={FormatSizeIcon}
                        size="small"
                        onClick={() => handleHeadingClick(2)}
                        active={editor.isActive("heading2")}
                        disabled={disableHeading}
                    />
                </React.Fragment>
            ) : (
                <TextField
                    placeholder={linkPlaceholder}
                    onKeyDown={handleSubmitLink}
                    onChange={handleLinkChange}
                    autoFocus
                    sx={{
                        backgroundColor: "",
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClearField}>
                                    <CancelIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        </BubbleMenu>
    );
};

export default FormatMenuBase;
