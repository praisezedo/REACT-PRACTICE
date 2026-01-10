
import withCounter from "./withCounter";

const ClickCounter = (props) => {
        const { incrementCount, count } = props;
        return (
            <button className="bg-green-500 text-white p-3 rounded-2xl hover:opacity-50" onClick={incrementCount}>Clicked {count} times</button>
        );
    };


export default withCounter(ClickCounter);