import React, { Fragment, useState } from "react";
import { GetStaticProps } from "next";

import { getAllProjects } from "../lib/api-utils";

import ProjectList from "../components/projects/projectList";
import { IProject } from "../models/project/types";

import styles from "../styles/Home.module.css";

interface IProjectProps {
  projectsData: IProject[];
}

export default function Home({ projectsData }: IProjectProps) {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  console.log(projects)

  return (
    <Fragment>
      <ProjectList data={projects} />
      {/* projectpopup */}
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getAllProjects();
  //console.log(data.data);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { projectsData: data.data }, 
    revalidate: 5000  //604800 una semana
  };
};
