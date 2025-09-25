import {Component} from "react";

class ClassComponent extends Component{
    // @ts-ignore
    render(): Element {
        const title = "Is a Class Component";
        return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
    }

}
export default ClassComponent;