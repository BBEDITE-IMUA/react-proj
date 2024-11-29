import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DefaultLayout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="content">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
