import stopAnimations from "../../tools/stopAnimations";
import { getSettings } from "../../storage";
import bigCursor from "../../tools/bigCursor";
import highlightTitle from "../../tools/highlightTitle";
import readingGuide from "../../tools/readingGuide";
import highlightLinks from "../../tools/highlightLinks";
import adjustLetterSpacing from "../../tools/adjustLetterSpacing";
import adjustLineHeight from "../../tools/adjustLineHeight";
import adjustFontWeight from "../../tools/adjustFontWeight";

export default function renderTools() {
    let { states } = getSettings();

    highlightTitle(states['highlight-title']);
    highlightLinks(states['highlight-links']);

    adjustLetterSpacing(states['letter-spacing']);
    adjustLineHeight(states['line-height']);
    adjustFontWeight(states['font-weight']);

    readingGuide(states['readable-guide']);
    stopAnimations(states['stop-animations']);
    bigCursor(states['big-cursor']);
}