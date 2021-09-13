import {Auth} from '@aws-amplify/auth';

export default async function login({password, username}) {
  console.log(`${username} are signup with ${password}`);

  const user = await Auth.signIn(username, password);

  return user;
}
