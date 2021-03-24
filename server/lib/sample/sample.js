
export default async function sample({ query }) {
    try {
        return `you are querying ${query}`;
    } catch (error) {
        throw error;
    }
}
