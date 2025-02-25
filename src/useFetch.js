import {useEffect, useState} from 'react';
// We are going to create a custom hook that will be used to fetch data from the server.
// This custom hook will be used in src/Home.js.
const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>
        {
            setTimeout(() => 
            {
                fetch(url)
                .then(res => 
                {    
                    if(!res.ok)
                    {
                        throw Error('Could Not Fetch The Data For That Resource');
                    }
                    return res.json();
                })
                .then(data => 
                {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => 
                {
                    setIsPending(false);
                    setError(err.message);
                })
            }, 3000);
        },[url]);
    return {data, isPending, error}; // This is the data that we want to return from the custom hook.  
}
export default useFetch;
// Now, we can use this custom hook in src/Home.js: