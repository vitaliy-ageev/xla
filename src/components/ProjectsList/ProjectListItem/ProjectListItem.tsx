import React, { FunctionComponent } from 'react'
import classes from './ProjectListItem.module.scss'
import Like from '../../UI/Icons/Like/Like'
import Tags from './Tags/Tags'
import { Link } from 'react-router-dom'
import { projectAPI } from '../../../services/ProjectService'
import { RouteNames } from '../../../routes/routes'

import Babka from '../../../assets/images/logo_projects/Babka.svg'
import GameInvest from '../../../assets/images/logo_projects/GameInvest.svg'
import Metaverse from '../../../assets/images/logo_projects/Metaverse.svg'
import Multiverse from '../../../assets/images/logo_projects/Multiverse.svg'
import Store3 from '../../../assets/images/logo_projects/Store3.svg'
import UserEx from '../../../assets/images/logo_projects/UserEx.svg'
import XLACard from '../../../assets/images/logo_projects/XLACard.svg'
import Web3 from '../../../assets/images/logo_projects/Web3.svg'
import PlayEarn from '../../../assets/images/logo_projects/PlayEarn.svg'

const ProjectItem: FunctionComponent = () => {
    const { data: project } = projectAPI.useFetchAllProjectsQuery(9)

    return (
        <>
            {
                project && project.projects.map(projectItem =>

                    <Link to={RouteNames.PROJECT + '/id=' + projectItem.id}
                        key={projectItem.id} className={classes.project_item}>
                        <div className={classes.project_item_inner}>
                            <div className={classes.project_item_left_container}>
                                {/* Background */}
                                <div className={classes.project_item_background}
                                    style={{
                                        background: `url(${projectItem.title == 'Metaverse' ? Metaverse
                                            : projectItem.title == 'Multiverse' ? Multiverse
                                                : projectItem.title == 'Babka Drops' ? Babka
                                                    : projectItem.title == 'Story3' ? Store3
                                                        : projectItem.title == 'Game Investment Platform' ? GameInvest
                                                            : projectItem.title == 'User Exchange for Video Games' ? UserEx
                                                                : projectItem.title == 'X.LA Card' ? XLACard
                                                                    : projectItem.title == 'Web3 Hollywood Commerce' ? Web3
                                                                        : projectItem.title == 'Play and Earn economic modes for games' ? PlayEarn
                                                                            : ''}`
                                    }}
                                />
                            </div>
                            <div className={classes.project_item_right_container}>
                                <div className={classes.project_item_container}>
                                    {/* Title */}
                                    <div className={classes.project_item_title}>
                                        {projectItem.title}
                                    </div>
                                    {/* Text */}
                                    <div className={classes.project_item_description}>
                                        {projectItem.description.length > 190 ? projectItem.description.slice(0, 190) + '...' : projectItem.description}
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