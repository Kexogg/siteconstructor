export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const response = await fetch("https://nyashdev-siteconstructor.stk8s.66bit.ru/api/users/info");
    return await response.json();
}
