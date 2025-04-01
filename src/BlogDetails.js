import { useParams } from "react-router-dom";
import useFetch from './useFetch';


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            <div className="home">
          {isPending && (
            <div className="loader-container">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Loading...</p>
            </div>
          )}
          {error && (
        <div className="error-message fade-in">
              <h2>⚠️ Oops! Something went wrong.</h2>
              <p>{error}</p>
              <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
      {blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Written By { blog.author }</p>
            <div>{ blog.body }</div>
        </article>
      )}
    </div>
        </div>
     );
}
 
export default BlogDetails;