import Image from "next/image";
import React, { Fragment } from "react";
import ProjectList from "../components/projects/projectList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <ProjectList />
    </Fragment>
  );
}
