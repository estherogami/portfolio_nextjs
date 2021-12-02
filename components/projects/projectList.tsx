import ProjectListItem from "./projectListItem";
import { IProject } from "../../models/project/types";

import styles from "./projectList.module.css";


interface IProjectListProps {
  data: IProject[];
}

const ProjectList = ({ data }: IProjectListProps) => {
   
  return (
    <ul className={styles.ProjectList}>
      { data.map( (project, index) => <ProjectListItem key={index} data={project} />)} 
    </ul>
  );
};

export default ProjectList;
