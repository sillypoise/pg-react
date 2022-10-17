import { useState, useEffect } from "react";

export function FetchingWithUseEffect() {
    let [data, setData] = useState<{
        userId: number;
        id: number;
        title: string;
        body: string;
    } | null>(null);
    let [error, setError] = useState<Error | null | unknown>(null);
    let [postId, setPostId] = useState<string | null>("5");

    useEffect(() => {
        let controller = new AbortController();
        async function getPost() {
            try {
                let res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`,
                    {
                        signal: controller.signal,
                    }
                );
                // if (!controller.signal.aborted) {
                //     return;
                // }
                if (res.status >= 500) {
                    let text = res.statusText;
                    setError(new Error(text));
                }
                let json = await res.json();
                if (json.error) {
                    setError(new Error(json.error));
                } else {
                    setData(json);
                }
            } catch (e) {
                if (e.name !== "AbortError") {
                    setError(e);
                }
            }
        }
        getPost();
        // return () => {
        //     controller.abort();
        // };
    }, [postId]);

    if (error) {
        return (
            <div>
                <h1>Oopsie Error</h1>
            </div>
        );
    }

    if (!data) {
        return (
            <div>
                <h1>Data incoming... just one second pls</h1>
            </div>
        );
    }

    return (
        <div className="stack">
            <h2>Fetching with useEffect</h2>
            <p>Example of how to properly fetch data with vanilla useEffect.</p>
            <h2>Choose your post!</h2>
            <form>
                <input
                    defaultValue={"5"}
                    type="number"
                    name="postID"
                    onChange={(e) => setPostId(e.target.value)}
                />
            </form>
            <hr />
            <h3>{data?.title.toUpperCase()}</h3>
            <strong>Author: User # {data?.userId}</strong>
            <p>{data?.body}</p>
        </div>
    );
}
