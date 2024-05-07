import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Register from "../components/Register";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <>
      {showForm && <Register setShowForm={setShowForm} />}
      {showForm2 && <SignIn setShowForm2={setShowForm} />}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col lg={6}>
            <img
              width="100%"
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt=""
              srcset=""
            />
          </Col>
          <Col lg={6}>
            <p className="fw-bolder" style={{ fontSize: "4rem" }}>
              Happening now
            </p>
            <Col lg={5}>
              <h3>Join Today</h3>
              <Button className="my-2 bg-transparent text-dark rounded-pill w-100 border">
                Sign up with Google
              </Button>
              <Button className="my-2 bg-transparent text-dark fw-bolder rounded-pill w-100 border">
                Sign up with Apple
              </Button>
              <div className="d-flex gap-3 align-items-center">
                <hr
                  className="w-100"
                  style={{ height: "2px", background: "lightgray" }}
                />
                <p className="p-0 m-0">or</p>
                <hr
                  className="w-100"
                  style={{ height: "2px", background: "lightgray" }}
                />
                <hr />
              </div>
              <Button
                onClick={() => setShowForm(true)}
                className="my-2 bg-info  text-white fw-bolder rounded-pill w-100 border"
              >
                Create Account
              </Button>
              <p style={{ fontSize: "0.7rem" }} className="">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
              <h6>Already have an Account</h6>
              <Button
                onClick={() => setShowForm2(true)}
                className="my-2 bg-transparent text-info fw-bolder rounded-pill w-100 border"
              >
                Sign in
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
