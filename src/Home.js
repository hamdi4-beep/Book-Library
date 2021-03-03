import useFetch from './useFetch';

function Home() {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/games");

    return (
        <div className="home">
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div>}
            {blogs.map(function(blog) {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.company}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;