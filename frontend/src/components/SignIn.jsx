import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logUser, reset } from "../features/auth/authSlice";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setShowForm2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/home");
    }

    dispatch(reset());
  }, [isError, isSuccess]);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = formFields;

  useEffect(() => {
    if (!email || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(logUser(data));
  };

  return (
    <>
      <div className="w-100 signin d-flex justify-content-center align-items-center">
        <Card className="col-xl-4 col-lg-6 mx-auto p-5">
          <IoMdCloseCircle
            cursor="pointer"
            onClick={() => setShowForm2(false)}
          />
          <Form className="">
            <img
              className="mx-auto d-block"
              width="50px"
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt=""
            />
            <Form.Control
              value={email}
              onChange={handleChange}
              type="email"
              className="my-2 p-3"
              placeholder="Email"
              name="email"
            />
            <Form.Control
              value={password}
              onChange={handleChange}
              type="password"
              className="my-2 p-3"
              placeholder="Password"
              name="password"
            />
          </Form>
          <Button
            onClick={handleClick}
            disabled={disabled}
            variant={disabled ? "secondary" : "dark"}
            className="w-100 rounded-pill mt-5 p-3"
          >
            {isLoading ? <BarLoader color="#ffffff" /> : "Login"}
          </Button>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
