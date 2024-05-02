const requestLogger = (logger) => (req, res, next) => {
  const requestInfo = `Request <<< METHOD: ${req.method}, URL: ${req.url}`

  res.on("finish", () => {
    logger.info(`${requestInfo} => Response <<< STATUS: ${res.statusCode}`);
  });

  next();
};

module.exports = requestLogger;
