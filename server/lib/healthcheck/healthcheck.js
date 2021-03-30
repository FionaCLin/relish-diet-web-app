export default async function healthcheck({query}) {
  if (!query) {
    throw new Error('no query');
  }
  return `ok`;
}
