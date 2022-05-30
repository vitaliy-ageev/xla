import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../UI/CustomButton/CustomButton';
import LinearSeparation from '../UI/LinearCornerSeparation/LinearCornerSeparation';
import classes from './ProjectItem.module.scss';
import BG from '../../assets/images/3.jpeg'
import OpportunitiesItem from './OpportunitiesItem/OpportunitiesItem';
import FAQ from '../FAQ/FAQ';

const ProjectItem: FunctionComponent = () => {
    const OpportunitiesArr = [
        {
            id: 1,
            name: "For Writers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 2,
            name: "For Agents",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 3,
            name: "For Curators",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 4,
            name: "For Readers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 5,
            name: "For Operators",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 6,
            name: "For Web 3 Developers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 7,
            name: "For UX/UI Designers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 8,
            name: "For Artists",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
        {
            id: 9,
            name: "For Product managers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/",
            link: "/"
        },
    ]

    const IFAQItems = [
        {
            id: 1,
            title: "Headline 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 2,
            title: "Headline 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 3,
            title: "Headline 3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 4,
            title: "Headline 4",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 5,
            title: "Headline 5",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 6,
            title: "Headline 6",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ]

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
            <div className={classes.project_item_desc_title_block}>
                <h3 className={classes.project_item_desc_title}>
                    Review
                </h3>
            </div>

            {/* Background */}
            <div className={classes.project_item_galery}></div>

            {/* Recent updates */}
            <div className={classes.project_item_desc_title_block}>
                {/* Title */}
                <h3 className={classes.project_item_desc_title}>
                    Recent updates
                </h3>
                <h4 className={classes.project_item_desc_title_link}>
                    Version history
                </h4>
            </div>
            <LinearSeparation mobile={true} />

            {/* Recent updates block */}
            <div className={classes.project_item_recent_updates}>
                {/* Title */}
                <div className={classes.project_item_recent_updates_title_block}>
                    <h3 className={classes.project_item_recent_updates_title}>
                        0.3
                    </h3>
                    <span className={classes.project_item_recent_updates_data}>
                        1 month ago
                    </span>
                </div>
                {/* Text */}
                <div className={classes.project_item_recent_updates_text}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            {/* Opportunities */}
            <div className={classes.project_item_desc_title_block}>
                {/* Title */}
                <h3 className={classes.project_item_desc_title}>
                    Opportunities
                </h3>
            </div>
            <LinearSeparation mobile={true} />

            {/*  */}
            <OpportunitiesItem OpportunitiesArr={OpportunitiesArr} />

            {/* FAQ */}
            <div className={classes.project_item_desc_title_block}>
                {/* Title */}
                <h3 className={classes.project_item_desc_title}>
                    FAQ
                </h3>
            </div>
            <LinearSeparation mobile={true} />

            <FAQ IFAQItems={IFAQItems} />

        </div>
    )
}

export default ProjectItem