import Link from "@tiptap/extension-link";
import './Link.scss';

const CustomLink = Link.extend({

    renderHTML(props) {
        return ['span', {class: 'tooltip'}, ['a', props.HTMLAttributes, 0], ['span', {class: 'tooltip-text'}, props.HTMLAttributes?.href]];
    },
});

export default CustomLink;