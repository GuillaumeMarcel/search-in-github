import { Router } from "express";

import users from "./users";
import git from "./git"

const api = Router();

api.use("/users", users);
api.use("/git", git)

export default api;
