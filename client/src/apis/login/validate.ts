import API from "../api";
import { getToken, setToken } from "../../utils/handleToken";

const validate = async (
  state: { id: string; password: string },
  type: string,
) => {
  let auth;

  if (type === "login") {
    try {
      auth = await API.post("/users/login", {
        email: state.id,
        password: state.password,
        header: {
          Authorization: getToken(),
        },
      });
    } catch (error) {
      throw new Error("로그인 인증 실패");
    }
  }
  if (type === "signUp") {
    try {
      auth = await API.post("/users/create", {
        email: state.id,
        password: state.password,
      });

      setToken(auth.data.token);
    } catch (error) {
      throw new Error("회원가입 인증 실패");
    }
  }

  return auth;
};

export default validate;
