import React, { FunctionComponent } from 'react'
import classes from './ProjectListItem.module.scss'
import Like from '../../UI/Icons/Like/Like'
import Tags from './Tags/Tags'
import { Link } from 'react-router-dom'
import { projectAPI } from '../../../services/ProjectService'
import { RouteNames } from '../../../routes/routes'
import Blur from './Blur/Blur'



const ProjectItem: FunctionComponent = () => {
    const { data: project } = projectAPI.useFetchAllProjectsQuery(9)

    return (
        <>
            {
                project && project.projects.map(projectItem =>

                    <Link to={RouteNames.PROJECT + '/id=' + projectItem.id}
                        key={projectItem.id} className={classes.project_item}>
                        <div className={classes.project_item_inner}
                            style={window.screen.width > 767 && projectItem.tags.length == 0 ? { alignItems: 'center' } : { alignItems: 'start' }}
                        >
                            <div className={classes.project_item_left_container}>
                                {/* Background */}
                                <div className={classes.project_item_background}
                                    style={{
                                        background: `url(${projectItem.logo_url})`
                                    }}
                                >
                                    {/* Background Blur */}
                                    <Blur />
                                </div>

                            </div>
                            <div className={classes.project_item_right_container}>
                                <div className={classes.project_item_container}>
                                    {/* Title */}
                                    <div className={classes.project_item_title}>
                                        {projectItem.title}
                                    </div>
                                    {/* Text */}
                                    <div className={classes.project_item_description}>
                                        {projectItem.description.length > 150 ? projectItem.description.slice(0, 170) + '...' : projectItem.description}
                                    </div>
                                    <div className={classes.project_item_hover}></div>
                                </div>
                                {/* Footer */}
                                {projectItem.tags.length > 0 ?
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
                                    : ''}
                            </div>
                        </div>
                    </Link>
                )
            }
        </>
    )
}

export default ProjectItem