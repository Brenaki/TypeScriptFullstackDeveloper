import { getAllUsersController } from "../__mocks__/controllers/mockGetAllUsers.mock";
import { createUserController } from "../__mocks__/controllers/mockCreateUsers.mock";
import { nothingNameCreateController } from "../__mocks__/controllers/mockNothingName.mock";
import { nothingEmailCreateController } from "../__mocks__/controllers/mockNothingEmail.mock";
import { deleteUserController } from "../__mocks__/controllers/mockDeleteUser.mock";

// First create user
createUserController()

// Second get all users
getAllUsersController()

// Third missing name
nothingNameCreateController()

// Fourth missing email
nothingEmailCreateController()

// Fifth delete user
deleteUserController()