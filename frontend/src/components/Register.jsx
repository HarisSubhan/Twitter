import React, { useState } from "react";
import { Button, Card, Form, FormControl, FormSelect } from "react-bootstrap";

const Register = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [formFields, setFormFields] =useState({
    name:"",
    email:"",
    month:"".
    day:"",
    year:""
  })

  const {name, email, month, day, year}
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

  return (
    <>
      <div className="w-100 register d-flex justify-content-center align-items-center">
        <Card className="col-xl-4 col-lg-6 mx-auto p-5">
          <Form className="">
            <img
              className="mx-auto d-block"
              width="50px"
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt=""
            />
            <Form.Control value={name} type="text" placeholder="Name" className="my-2 p-2" />
            <Form.Control
            value='email'
              type="email"
              placeholder="Email"
              className="my-2 p-2"
            />
            <h5 className="mt-5">Date of Birth</h5>
            <p className="text-secondary">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div value={month}
            className="d-flex gap-4 ">
              <Form.Select className="p-4">
                {months?.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select value={day} >
                {Array.from({ length: 31 }).map((_, index) => {
                  return (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select value={year} >
                {Array.from({ length: 120 }).map((_, index) => {
                  return (
                    <option key={index} value={currentYear - index}>
                      {currentYear - index}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </Form>
          <Button className="w-100 rounded-pill mt-5 " variant="secondary">
            Next
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Register;
