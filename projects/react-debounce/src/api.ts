let api = {
    list: (
        query: string
    ): Promise<Array<{ id: number; age: number; name: string }>> => {
        return new Promise((resolve) => {
            setInterval(() => {
                resolve(
                    [
                        {
                            id: 1,
                            name: "Joe",
                            age: 29,
                        },
                        {
                            id: 2,
                            name: "Sarah",
                            age: 27,
                        },
                        {
                            id: 3,
                            name: "Bob",
                            age: 16,
                        },
                        {
                            id: 4,
                            name: "Alice",
                            age: 43,
                        },
                        {
                            id: 5,
                            name: "Zack",
                            age: 32,
                        },
                    ].filter((person) =>
                        person.name.toLowerCase().includes(query.toLowerCase())
                    )
                );
            }, 1000);
        });
    },
};

export { api };
