export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    return {
        siteName: "Site Name",
        companyName: "Client Company Name",
        email: "example@example.com",
        siteUrl: "myExpo",
        isPublished: true
    }
}
