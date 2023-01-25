import App from "next/app";
import React from "react";
import Layout from "../src/assets/Layout";
import '../src/styles/bootstrap.css';
import '../src/styles/main.css';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
      
        <Layout>
        <Component {...pageProps}></Component>
        </Layout>
        
        
      </>
    );
  }
}

export default MyApp;
