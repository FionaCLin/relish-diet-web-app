export default async function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  if (err.name == 'Bad Request') {
    const {message, errors} = err;
    return res.status(400).json({
      message,
      errors,
    });
  }

  res.status(500).send({error: err});
}
