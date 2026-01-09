import { Component } from "react";

class Calculator extends Component {
constructor() {
  super();

  this.state = {
    count: 0
  }
}
increement() {
  this.setState({
    count: this.state.count + 1
  })
}
render () {
return (
    <div className="flex flex-col justify-center items-center text-center">
    <h1 className="font-bold text-2xl my-3" >{this.state.count}</h1>
    <button className="bg-black text-white p-3 rounded-2xl hover:opacity-50" onClick={() => this.increement()}>Increement</button>
    </div>
)
}
}

export default Calculator

