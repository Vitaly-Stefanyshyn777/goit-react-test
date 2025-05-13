import React from "react";

function RegisterForm() {
  const handelSumbit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });
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
