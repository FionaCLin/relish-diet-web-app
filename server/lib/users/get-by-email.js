
export default async function getByEmail({email}) {
  console.log(`${email}`);
  return {
    email,
    weight: 50,
    height: 160,
    calories_goal: 1300,
  };
}
