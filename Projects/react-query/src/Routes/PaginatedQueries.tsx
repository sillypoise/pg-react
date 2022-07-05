import { useState } from "react";
import { useQuery } from "react-query";

export function PaginatedQueries() {
    const [page, setPage] = useState(0);

    async function fetchProjects(page = 0) {
        let res = await fetch("/api/projects?page" + page);
        return res.json();
    }

    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery(["projects", page], () => fetchProjects(page), {
            keepPreviousData: true,
        });

    if (isLoading) return <div>...Loading</div>;

    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.projects.map((project: any) => {
                <p key={project.id}>{project.name}</p>;
            })}
            <span>Current Page: {page + 1}</span>
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                Previous Page
            </button>
            <button
                onClick={() => {
                    if (!isPreviousData && data.hasMore) {
                        setPage((old) => old + 1);
                    }
                }}
                disabled={isPreviousData || !data?.hasMore}
            >
                Next Page
            </button>
            {isFetching ? <span>Loading...</span> : null}
        </div>
    );
}
