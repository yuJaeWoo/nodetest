const wrapper = (asyncFn) => (async (req, res, next) => {
    try {
      const result = await asyncFn(req, res, next);
      if (req.timedout) {
        return null;
      }
  
      return res.status(200).send(result);
    } catch (error) {
      return next(error);
    }
  });
  
  module.exports = wrapper;