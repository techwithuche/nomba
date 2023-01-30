import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import { withRouter } from "next/router";


const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default withRouter(Layout);
