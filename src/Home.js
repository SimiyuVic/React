import { useState } from 'react';

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Victor', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Simiyu', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Charles', id: 3}
    ]);
    return (
        <div className="home">
            {blogs.map((content) => (
                <div className="blog-preview" key={content.id}>
                    <h2>{content.title}</h2>
                    <p>Wriiten by {content.author} </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;