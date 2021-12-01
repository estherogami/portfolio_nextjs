import { Fragment } from "react";
import styles from "./projectListItem.module.css";

const ProjectListItem = () => {
  return (
    <Fragment>
      <li className={styles.ProjectListItem}>
        <header>
          <h2>Title</h2>
          <p>Type</p>
        </header>
        Project Item
      </li>
      <li className={styles.ProjectListItem}>Project Item but a long one</li>
    </Fragment>
  );
};

export default ProjectListItem;
