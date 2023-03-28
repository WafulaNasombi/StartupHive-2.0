const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Projects = require("./Projects");

const investmentSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: { Projects },
    },
    amount: {
      type: String,
    },
    investmentDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Investment = mongoose.model("Investment", investmentSchema);
module.exports = Investment;
