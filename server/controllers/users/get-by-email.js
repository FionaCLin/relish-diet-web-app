
export default async function getByEmail(request, response, next) {
  try {
    const {email} = request.params;

    response.send({});
  } catch (error) {
    next(error.message);
  }
}
