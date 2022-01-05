
const noteModel = require("../models/noteModel");

exports.create = async (req, res, next) => {
  const { title, content, color, authorId } = req.body;
  try {
    const note = new noteModel({
      title: title,
      content: content,
      color: color,
      authorId: authorId
    });
    await note.save();
    res.send(note);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const note = await noteModel.findByIdAndUpdate(req.params.id, req.body);
    await note.save();
    res.send(note);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.id);
    if (!note) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};