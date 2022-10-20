let api = {
    list: (): Promise<Array<{ id: number; age: number; name: string }>> => {
        return new Promise((resolve) => {
            resolve([
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
            ]);
        });
    },
};

export { api };
