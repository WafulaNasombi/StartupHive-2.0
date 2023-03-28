const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    technologies: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;
