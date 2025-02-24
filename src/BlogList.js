const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <div className="blog-list">
            {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author} </p>
                    <button onClick={()=>handleDelete(blogs.id)}>Delete BLog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;