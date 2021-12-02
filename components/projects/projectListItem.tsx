import { Fragment } from "react";
import { IProject } from "../../models/project/types";
import Image from "next/image";

import styles from "./projectListItem.module.css";
import { Spinner } from "react-bootstrap";

interface IProjectListItemProps {
  data: IProject;
}

const ProjectListItem = ({ data }: IProjectListItemProps) => {
  const { title, featured_picture: picture, category } = data;

  return (
    <Fragment>
      <li className={styles.ProjectListItem}>
        <header>
          <h2>{title}</h2>
          <p>{category}</p>
        </header>
        <div>
          <Image src={picture} layout="responsive" height={1000} width={400} objectFit="contain" alt={title} loading="lazy" />
        </div>
      </li>
    </Fragment>
  );
};

export default ProjectListItem;
