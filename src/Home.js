import BlogList from "./BlogList";
import useFetch from "./useFetch";
import "./index.css"; // Make sure this file is included

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
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
      {blogs && <BlogList blogs={blogs} title="All Titles!" />}
    </div>
  );
};

export default Home;
