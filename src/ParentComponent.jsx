import React from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {

     function clickHandler () {
        alert("button clicked");
    }

    return (
        <React.Fragment>
              <ChildComponent clickFunction={clickHandler}/>
        </React.Fragment>
    )
};