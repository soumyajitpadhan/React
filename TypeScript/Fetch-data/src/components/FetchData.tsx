import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FetchData: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        try {
            const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        }
        catch (error) {
            setError((error as Error).message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} style={{ border: "2px solid red", margin: "5px" }}>
                        <p><b>Title: </b>{post.title}</p>
                        <p><b>Body: </b>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchData