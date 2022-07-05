import { useQuery } from "react-query";

export function HelloExample() {
    const { isLoading, error, data } = useQuery("posts", async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        return res.json();
    });

    if (isLoading) return <h3>Loading...⏳</h3>;

    if (error) return <h3>Oopsie error...⚠</h3>;

    console.log(data);
    return (
        <div className="stack">
            <h3>Hello World React Query Example</h3>
            <h3>{data?.title.toUpperCase()}</h3>
            <strong>Author: User # {data?.userId}</strong>
            <p>{data?.body}</p>
        </div>
    );
}
