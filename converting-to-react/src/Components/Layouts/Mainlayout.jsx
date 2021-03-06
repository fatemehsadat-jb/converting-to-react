import React, { Fragment } from "react";
import Topnav from "./../Navs/Topnav";
import Header from "./../Common/Header";
import Mainnav from "./../Navs/Mainnav";
import Footer from "./../Common/Footer";
import { useLocation } from "react-router";
import Helmet from "react-helmet";
const Mainlayout = (props) => {
  let pagepathname = useLocation().pathname;
  return (
    <Fragment>
      <Helmet>
        <title>خودآموز تاپلرن</title>
      </Helmet>
      <div className="landing-layer">
        <div className="container">
          <Topnav />
          {pagepathname === "/" ? <Header /> : null}
        </div>
      </div>

      <Mainnav />

      <main id="home-page">
        <div className="container">{props.children}</div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Mainlayout;
