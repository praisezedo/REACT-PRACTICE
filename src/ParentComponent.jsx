
import ReactDOM from 'react-dom';

export default function ParentComponent() {
    return ReactDOM.createPortal(
        <h1>Hello from portals </h1>,
        document.getElementById('portal-root')
    )
};