import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operation";

function LoginForm() {
  const dispatch = useDispatch();
  const handelSumbit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ email: email.value, password: password.value });

    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="sumbit"> Login </button>
      </form>
    </div>
  );
}

export default LoginForm;
