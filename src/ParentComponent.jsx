import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ParentComponent() {
   const [data, setData] = useState([]);
   const [error , setError] = useState(null);
   const [loading , setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error);
            });
    }, []);

    return (
        <>
 
        <div>
            <h1>Posts</h1>
            {data && data.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))}
        {error && <p>Error fetching data: {error}</p>}
        </div>
</>
    )
}
    