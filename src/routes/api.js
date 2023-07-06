import express from "express";
import { Register } from "../controllers/Register.controller.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { Login } from "../controllers/login.controller.js";
import { createTodo } from "../controllers/todo.controller.js";
import { check } from "express-validator";
import { GetTodos } from "../controllers/todoList.controller.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post('/register',RegisterSchema,Register)
apiRoute.post('/login',LoginSchema,Login)

apiProtected.post('/createTodo',[check("desc","Todo desc is required").exists()],createTodo)

apiProtected.get('/todoList',GetTodos)

export default apiRoute;