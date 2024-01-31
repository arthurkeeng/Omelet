import React, { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import app from "../axiosInstance";
import { UserContext } from "../App";
const FormPage = ({}) => {
  const navigate = useNavigate();
  const { person, setPerson, redirect, setRedirect } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [signed, setSigned] = useState(true);
  // const [redirect, setRedirect] = useState(false);
  const changeHandler = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      if (signed) {
        const { data } = await app.post("/users/login", user);
        alert(data.msg);
        data.loggdIn && setRedirect(true);
        setPerson(data.username);
      } else {
        const { data } = await app.post("/users/register", user);
        alert(data);
      }
    } catch (error) {
      alert("something happened");
    }
  };
  useEffect(() => {
    setUser({});
    if (person) {
      navigate("/");
    }
  }, [signed]);
  if (redirect) {
    navigate("/");
  }
  return (
    <>
      {signed ? (
        <Login
          changeHandler={(e) => changeHandler(e)}
          submitHandeler={(e) => submitHandeler(e)}
          signed={signed}
          setSigned={setSigned}
          setUser={setUser}
        />
      ) : (
        <SignUp
          changeHandler={(e) => changeHandler(e)}
          submitHandeler={(e) => submitHandeler(e)}
          signed={signed}
          setSigned={setSigned}
          setUser={setUser}
        />
      )}
    </>
  );
};
const Login = ({ signed, setSigned, changeHandler, submitHandeler }) => {
  return (
    <div className="p-4 mt-20 grow flex items-center justify-around">
      <div>
        <h4 className="font-bold">Login</h4>
        <form
          className="max-w-md  mx-auto"
          onChange={(e) => changeHandler(e)}
          onSubmit={(e) => submitHandeler(e)}
        >
          <input name="username" type="text" placeholder="enter username" />
          <input name="password" type="password" placeholder="enter password" />
          <input className="primary" value="Sign In" type="submit" />
        </form>
        <div className="flex justify-around">
          <p>Don't have an account yet?</p>
          <button onClick={() => setSigned(!signed)}>Register</button>
        </div>
      </div>
    </div>
  );
};

const SignUp = ({ signed, setSigned, changeHandler, submitHandeler }) => {
  return (
    <div className="p-4 mt-20 grow flex items-center justify-around">
      <div>
        <h4 className="font-bold">Register</h4>
        <form
          className="max-w-md  mx-auto"
          onChange={(e) => changeHandler(e)}
          onSubmit={(e) => submitHandeler(e)}
        >
          {/* <input name="username" type="text" placeholder="enter username" /> */}
          <input name="username" type="email" placeholder="enter email" />
          <input name="password" type="password" placeholder="enter password" />
          <input className="primary" value="SignUp" type="submit" />
        </form>
        <div className="flex justify-around">
          <p>Have an account?</p>
          <button onClick={() => setSigned(!signed)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

const styles = {
  width: "80%",
  background: "green",
};
