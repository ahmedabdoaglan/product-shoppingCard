import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/Footer/Footer";
import SimilerProducts from "../components/layout/SimilerProducts/SimilerProducts";
import ControlCard from "../components/layout/ControlCard/ControlCard";
import TestCard from "../TestCard/TestCard";

const Layout = () => {
  return (
    <Container>
      <Header />

      <div>
        <Outlet />
      </div>
      <ControlCard />
      <SimilerProducts />
      <Footer />
      <TestCard />
    </Container>
  );
};

export default Layout;
