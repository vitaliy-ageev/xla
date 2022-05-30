import React, { FunctionComponent } from 'react'
import classes from './ProjectListItem.module.scss'
import Like from '../../UI/Icons/Like/Like'
import Tags from './Tags/Tags'
import { Link } from 'react-router-dom'

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
    background: string,
    path?: string
}

interface IProjects {
    projectItems: IprojectItems[]
}

const ProjectItem: FunctionComponent<IProjects> = ({ projectItems }) => {
    return (
        <>
            {
                projectItems.map(
                    projectItem =>
                        <Link to={__dirname + projectItem.path}
                            key={projectItem.id} className={classes.project_item}>
                            <div className={classes.project_item_inner}>
                                <div className={classes.project_item_left_container}>
                                    {/* Background */}
                                    <div className={classes.project_item_background} />
                                </div>
                                <div className={classes.project_item_right_container}>
                                    <div className={classes.project_item_container}>
                                        {/* Title */}
                                        <div className={classes.project_item_title}>
                                            {projectItem.name}
                                        </div>
                                        {/* Text */}
                                        <div className={classes.project_item_description}>
                                            {projectItem.description}
                                        </div>
                                        <div className={classes.project_item_hover}></div>
                                    </div>
                                    {/* Footer */}
                                    <div className={classes.project_item_footer}>
                                        {/* Likes */}
                                        {/* <div className={classes.project_item_footer_likes}>
                                            <Like />
                                            <span className={classes.project_item_footer_likes_count}>
                                                {projectItem.likes}
                                            </span>
                                        </div> */}
                                        {/* Tags */}
                                        <Tags tags={projectItem.tags} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                )
            }
        </>
    )
}

export default ProjectItem