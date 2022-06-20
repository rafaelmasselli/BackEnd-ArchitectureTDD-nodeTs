import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUser.controller";
import { DeleteUserController } from "./controllers/DeleteUser.controller";
import { GetAllUsersController } from "./controllers/GetAllUsers.controller";
import { UpdateUserController } from "./controllers/UpdateUser.controller";

const router = Router();

router.patch("/user/update", new UpdateUserController().handle);
router.post("/addUser", new CreateUserController().handle);
router.get("/users", new GetAllUsersController().handle);
router.delete("/user/delete", new DeleteUserController().handle);

export { router };
