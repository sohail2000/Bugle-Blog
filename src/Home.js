import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res=> {
                    if(!res.ok){
                        throw Error('could not fetch data for this resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setblog(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        },1000);
    },[]);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs!'/>}
        </div>
    );
}

export default Home;