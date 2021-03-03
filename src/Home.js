import {useState} from 'react';

function Home() {
    const [blogs, setBlogs] = useState([
        { title: "Fury of Wind", author: "Hamdi", id: 1},
        { title: "Thunderbolt,", author: "Shawn", id: 2},
        { title: "Thousand Hands", author: "Che Che", id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map(function(blog) {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;