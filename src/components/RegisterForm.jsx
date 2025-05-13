import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operation";

function RegisterForm() {
  const dispatch = useDispatch();
  const handelSumbit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="sumbit"> Register </button>
      </form>
    </div>
  );
}

export default RegisterForm;
