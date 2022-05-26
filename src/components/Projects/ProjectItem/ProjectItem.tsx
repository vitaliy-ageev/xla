import React, { FunctionComponent } from 'react'
import LeftRightSection from '../../LeftRightSection/LeftRightSection'
import LeftSection from '../../LeftRightSection/LeftSection'
import RightSection from '../../LeftRightSection/RightSection'
import classes from './ProjectItem.module.scss'
import BG from '../../../assets/images/1.jpeg'
import Like from '../../UI/Icons/Like/Like'
import Tags from './Tags/Tags'

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

interface IProjects {
    projectItems: IprojectItems[]
}

const ProjectItem: FunctionComponent<IProjects> = ({ projectItems }) => {
    return (
        <>
            {
                projectItems.map(
                    projectItem =>
                        <div key={projectItem.id} className={classes.project_item}>
                            <LeftRightSection justify='fles-start'>
                                <LeftSection width='20%'>
                                    {/* Background */}
                                    <div className={classes.project_item_background} />
                                </LeftSection>
                                <RightSection width='80%' justify='space-between' minHeight='200px'>
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
                                </RightSection>
                            </LeftRightSection>
                        </div>
                )
            }
        </>
    )
}

export default ProjectItem