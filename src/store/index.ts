import { configure } from "mobx";

configure({ enforceActions: "observed", isolateGlobalState: true });

export class Store {}
