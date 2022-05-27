import React, { FunctionComponent } from 'react'
import classes from './ProjectsList.module.scss'
import ProjectItem from './ProjectListItem/ProjectListItem'
import Categories from './Categories/Categories'

interface ITag {
    id: number,
    name: string,
    path: string
}

interface IprojectItems {
    id: number,
    name: string,
    description: string,
    likes: string,
    tags: ITag[],
    background: string
}

interface ICategories {

}

interface IProjects {
    projectItems: IprojectItems[],
    categorieItems: ICategories[]
}

const Projects: FunctionComponent<IProjects> = ({ projectItems, categorieItems }) => {
    return (
        <div className={classes.projects}>
            {/* <Categories /> */}
            <ProjectItem projectItems={projectItems} />
        </div>
    )
}

export default Projects