import { createElement } from "react";

import { CascaderContainerProps } from "../typings/CascaderProps";

import "./ui/Cascader.scss";

import { useObserver } from "mobx-react";




export default function Cascader(props: CascaderContainerProps) {

    return useObserver(() => (
        <div>
            <span>myString</span><span>{props.myString}</span>
        </div>
    ));
}

