import withCounter from "./withCounter";

const HoverCounter = (props) => {
    const { incrementCount, count } = props;
    return (
        <h2 className="bg-green-500 text-white p-3 rounded-2xl hover:opacity-50" onMouseOver={incrementCount}>Hovered {count} times</h2>
    );
};

export default withCounter(HoverCounter);
