import React, { FunctionComponent, useRef } from 'react'
import classes from './ProjectsList.module.scss'
import ProjectItem from './ProjectListItem/ProjectListItem'
import Categories from './Categories/Categories'

interface ProjectsProps {
}

const Projects: FunctionComponent<ProjectsProps> = (props) => {

    return (
        <div className={classes.projects}>
            {/* <Categories /> */}
            <ProjectItem />
        </div>
    )
}

export default Projects