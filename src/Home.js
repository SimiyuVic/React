import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);  
    useEffect(()=>
    {
        setTimeout(() => 
        {
            fetch('http://localhost:8001/blogs')
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
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => 
            {
                setIsPending(false);
                setError(err.message);
            })
        }, 3000);
    },[]);
    return (
        <div className="home">
            {isPending && (
                <div className="bubbles-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            {error && <div className="error">{error}</div>}
            {blogs && <BlogList blogs={blogs} title ="All Tittle !"/>}
        </div>
    );
}
 
export default Home;