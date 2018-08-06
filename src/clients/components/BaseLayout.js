import React, { Component } from "react";
import Header from "./Header";
import MenuSidebar from "./MenuSidebar";
import Footer from "./Footer";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuSidebar />
        <Footer />
      </div>
    );
  }
}
