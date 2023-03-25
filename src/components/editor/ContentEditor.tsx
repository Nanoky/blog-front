import React from "react";
import EditorBase from "./EditorBase"

interface Props {
    onChange: (value: string) => void;
}

const ContentEditor = ({onChange}: Props) => {
    return (
        <EditorBase placeholder="Write the title ..." onHTMLChange={onChange} />
    )
}

export default ContentEditor;