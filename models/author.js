var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual author's full name

AuthorSchema.virtual("name").get(
  () => `${this.family_name}, ${this.first_name}`
);

// Virtual authors lifespan
AuthorSchema.virtual("lifespan").get(() =>
  (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
);

// Virtual for author URL

AuthorSchema.virtual("url").get(() => `/catalog/author/${this._id}`);

module.exports = mongoose.model("Author", AuthorSchema);
