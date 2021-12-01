import ProjectListItem from "./projectListItem";
import styles from "./projectList.module.css";
const ProjectList = () => {
    return (
        <ul className={styles.ProjectList}>
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />

        </ul>
    );
};

export default ProjectList;