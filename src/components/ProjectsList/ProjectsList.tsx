import React, { FunctionComponent } from 'react'
import classes from './ProjectsList.module.scss'
import ProjectItem from './ProjectListItem/ProjectListItem'
import Categories from './Categories/Categories'

const Projects: FunctionComponent = () => {
    return (
        <div className={classes.projects}>
            {/* <Categories /> */}
            <ProjectItem />
        </div>
    )
}

export default Projects