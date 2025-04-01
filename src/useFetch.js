import {useEffect, useState} from 'react';
//created a custom hook that will be used to fetch data from the server.
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
            }, 1000);
        },[url]);
    return {data, isPending, error}; // This is the data that is returned    from the custom hook.  
}
export default useFetch;
//this custom hook in src/Home.js: