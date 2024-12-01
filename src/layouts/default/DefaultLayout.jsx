import React from "react";
import Header from "../../components/Header/Header";
import "./DefaultLayout.css";
import Footer from "../../components/Footer/Footer";

const DefaultLayout = ({ children, isAuthenticated, onLogout, user }) => (
  <div className="layout">
    <Header isAuthenticated={isAuthenticated} onLogout={onLogout} user={user} />
    <main className="content">{children}</main>
    <Footer className="footer"/>
  </div>
);

export default DefaultLayout;
