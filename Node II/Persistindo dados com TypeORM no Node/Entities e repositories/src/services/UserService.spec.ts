import { createUsersService } from "../__mocks__/services/mockCreateUsers.mock";
import { deleteUsersService } from "../__mocks__/services/mockDeleteUser.mock";
import { getUserService } from "../__mocks__/services/mockGetAllUsers.mock";
import { nothingEmailCreateService } from "../__mocks__/services/mockNothingEmail.mock";
import { nothingNameCreateService } from "../__mocks__/services/mockNothingName.mock";

// First create user
createUsersService()

// Second get all users
getUserService()

// Third missing name
nothingNameCreateService()

// Fourth missing email
nothingEmailCreateService()

// Fifth delete user
deleteUsersService()