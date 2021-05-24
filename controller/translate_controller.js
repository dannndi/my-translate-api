const translate = require("@iamtraction/google-translate");

exports.translate = async (req, res, next) => {
  try {
    const text = req.query.text;
    let to = req.query.to;
    let from = req.query.from;
    let result;

    if (text == null || text == "" || text == undefined) {
      const error = new Error();
      error.status = 404;
      error.message = "Error, text tidak boleh kosong";
      return next(error);
    }

    if (to == null || to == "" || to == undefined) {
      to = "en";
    }

    if (from == null || from == "" || from == undefined) {
      from = "id";
    }

    result = await translate(`${text}`, { from, to });
    res.status(200).json({
      origin: text,
      result: result.text,
    });
  } catch (err) {
    const error = new Error();
    error.status = 500;
    error.message = "Server error";
    return next(error);
  }
};
