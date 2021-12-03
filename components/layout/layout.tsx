import { Fragment, useContext, useState } from "react";
import Head from "next/head";
import MainNavigation from "./mainNavigation";
import MouseCircle from "../ui/MouseCircle/MouseCircle";
import AppContext from "../../store/app-context";

import styles from "./layout.module.css";

//import MainNavigation from "./main-navigation";

const Layout = (props) => {
  const ctx = useContext(AppContext);

  return (
    <Fragment>
      <Head>
        <title>Nomada - Freelancer Web Developer & Designer</title>
        <meta
          name="description"
          content="Freelancer Web Developer & Designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`h-100 ${styles.MainWrap} ${!ctx.themeMode ? "light-mode" : "dark-mode"}`}
      >
        <div className="d-flex h-100">
          <MainNavigation />
          <section className={`h-100 ${styles.MainSection}`}>
            {props.children}
          </section>
          <MouseCircle />
        </div>
      </main>

      {/*<Footer />*/}
    </Fragment>
  );
};

export default Layout;
