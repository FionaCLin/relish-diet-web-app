import {Auth} from '@aws-amplify/auth';

export default async function login({password, username}) {
  console.log(`${username} are login with ${password}`);
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (err) {
    console.log(err, 'Auth has Error');
    throw err;
  }
}
