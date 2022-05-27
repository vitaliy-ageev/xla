import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../UI/CustomButton/CustomButton';
import LinearSeparation from '../UI/LinearSeparation/LinearSeparation';
import classes from './ProjectItem.module.scss';
import BG from '../../assets/images/3.jpeg'

const ProjectItem: FunctionComponent = () => {
    return (
        <div className={classes.project_item}>
            {/* Title */}
            <h1 className={classes.project_item_title}>
                Babka Cryptext
            </h1>
            {/* Subtitle */}
            <h2 className={classes.project_item_subtitle}>
                Smart digital column with NFT art broadcast
            </h2>
            {/* Link */}
            <Link to="/" className={classes.project_item_link}>
                x.la/babkacryptex
            </Link>
            <LinearSeparation />
            {/* Buttons */}
            <div className={classes.project_item_buttons}>
                <CustomButton name='Project discussion' styleBtn='background' marginR={20} width={352} color='black' style='project_page' />
                <CustomButton name='Ask a Question' styleBtn='border' marginR={20} width={310} color='black' style='project_page' />
                <CustomButton name='Share a similar project' styleBtn='border' marginR={20} width={420} color='black' style='project_page' />
            </div>
            {/* Desctiption */}
            <div className={classes.project_item_description}>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>

            {/* Title */}
            <h3 className={classes.project_item_desc_title}>
                Review
            </h3>

            {/* Background */}
            <div className={classes.project_item_galery}></div>

        </div>
    )
}

export default ProjectItem