import { Auth } from "@aws-amplify/auth";

export default async function login({ password, username }) {
    try {
        console.log(`${username} are login with ${password}`);

        const user = await Auth.signIn(username, password);
        return user;
    } catch (error) {
        throw error;
    }
}
