import api from "./api";

class UserService {
  constructor() {
    this.getLoggedUser = async () => {
      const query = {
        query: `query  {
                    currentUser {
                          id
                          name
                          state
                          email
                  }
                }`,
      };

      const result = await api.post("/", query);

      // console.log("getLoggedUser", result);

      if (result.data.errors) {
        console.error("error ", result.data.errors[0]);
        throw result.data.errors[0];
      } else {
        return result.data.data.currentUser;
      }
    };
  }
}

const userService = new UserService();
export default userService;
