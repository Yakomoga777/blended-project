const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false, collection: "tasks" }
);

const Task = model("task", taskSchema);

module.exports = { Task };
