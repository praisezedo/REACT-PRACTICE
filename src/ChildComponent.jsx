import { PureComponent } from "react";
import { Consumer } from "./useContext";

export default class ChildComponent extends PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
               <Consumer>
                {(value) => <h1 className="font-bold text-2xl my-3">{value}</h1>}
               </Consumer>
            </>
        )
    }}