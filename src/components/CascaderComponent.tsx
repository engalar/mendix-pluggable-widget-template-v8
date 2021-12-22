import { createElement } from "react";
import { useObserver } from "mobx-react";

export interface CascaderComponentProps {
}

export function CascaderComponent(props: CascaderComponentProps) {
    console.log(props);

    return useObserver(() => (
        <div>

        </div>
    ));
}
