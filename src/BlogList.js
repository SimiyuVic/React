const BlogList = ({blogs, title }) => {
    return (
        <div className="blog-list">
            {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author} </p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;