import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { regUser, reset } from "../features/auth/authSlice";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = ({ setShowForm }) => {
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

  let date = new Date();
  let currentYear = date.getFullYear();
  const [disabled, setDisabled] = useState(true);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, email, month, day, year, password } = formFields;

  useEffect(() => {
    if (!name || !email || !month || !day || !year || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, email, month, day, year, password]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      dob: `${day}-${month}-${year}`,
      password,
    };

    dispatch(regUser(data));
  };

  return (
    <>
      <div className="w-100 register d-flex justify-content-center align-items-center">
        <Card className="col-xl-4 col-lg-6 mx-auto p-5">
          <IoMdCloseCircle
            cursor="pointer"
            onClick={() => setShowForm(false)}
          />
          <Form className="">
            <img
              className="mx-auto d-block"
              width="50px"
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt=""
            />
            <Form.Control
              value={name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="my-2 p-2"
              name="name"
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
            <h5 className="mt-5">Date of Birth</h5>
            <p className="text-secondary">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div className="d-flex gap-4 ">
              <Form.Select
                value={month}
                onChange={handleChange}
                className="p-4"
                name="month"
              >
                {months?.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                className="p-4"
                value={day}
                name="day"
                onChange={handleChange}
              >
                {Array.from({ length: 31 }).map((_, index) => {
                  return (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select name="year" value={year} onChange={handleChange}>
                {Array.from({ length: 121 }).map((_, index) => {
                  return (
                    <option key={index} value={currentYear - index}>
                      {currentYear - index}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </Form>
          <Button
            onClick={handleClick}
            disabled={disabled}
            variant={disabled ? "secondary" : "dark"}
            className="w-100 rounded-pill mt-5 p-3"
          >
            {isLoading ? <BarLoader color="#ffffff" /> : "Next"}
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Register;
