export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const data = {
        balance: 6000,
        expectedExpenses: 2000
    }
    return data;
}
