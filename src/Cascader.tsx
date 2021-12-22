import { createElement } from "react";


import { CascaderContainerProps } from "../typings/CascaderProps";

import "antd/es/tree/style/index.css";
import "antd/es/spin/style/index.css";
import "antd/es/empty/style/index.css";
import "antd/es/input/style/index.css";

import "./ui/Cascader.scss";

import { useObserver } from "mobx-react";




export default function Cascader(props: CascaderContainerProps) {

    return useObserver(() => (
        <div>
            <span>myString</span><span>{props.myString}</span>
        </div>
    ));
}

