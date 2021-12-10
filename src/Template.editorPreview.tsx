import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { TemplatePreviewProps } from "../typings/TemplateProps";

declare function require(name: string): string;

export class preview extends Component<TemplatePreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/Template.css");
}
