import React, { PureComponent } from "react";

export default class ChildComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    
    componentDidMount() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <>
          <input className="flex justify-center items-center text-center" ref={this.inputRef} type="text" placeholder="enter your name.." />  
            </>
        )
    }}