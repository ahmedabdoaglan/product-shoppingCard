import React from "react";
import { useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Container>
      <div className="notFound">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    </Container>
  );
};

export default ErrorPage;
