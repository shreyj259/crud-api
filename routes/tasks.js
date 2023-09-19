const express = require("express");
const app = express();
const Router = express.Router();
const {
  getAllTasks,createTask,getTask,updateTask,deleteTask} = require("../controllers/tasks");

Router.route("/").get(getAllTasks).post(createTask);
Router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = Router;
 