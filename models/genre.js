var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, minlength: 3, maxlength: 100, required: true },
});

//Virtuals

GenreSchema.virtual("url").get(() => `/catalog/genre/${this._id}`);

module.exports = mongoose.model("Genre", GenreSchema);
