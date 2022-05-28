import React, { FunctionComponent } from 'react'
import Basement from '../components/Basement/Basement'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LeftRightSection from '../components/LeftRightSection/LeftRightSection'
import LeftSection from '../components/LeftRightSection/LeftSection'
import RightSection from '../components/LeftRightSection/RightSection'
import MainSection from '../components/MainSection/MainSection'
import OpportunitiesList from '../components/OpportunitiesList/OpportunitiesList'

import TitleSection from '../components/TitleSection/TitleSection'
import Title from '../components/UI/Title/Title'

const Opportunities: FunctionComponent = () => {
    window.scrollTo(0, 0);

    const OpportunitiesItems = [
        {
            id: 1,
            name: "IOS Developer",
            project: "Babka Cryptex",
            type: "Contract",
            method: "Remote Friendly",
            location: "Malasia",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 2,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 3,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 4,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 5,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 6,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 7,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 8,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
        {
            id: 9,
            name: "Offer headline",
            project: "Project name",
            type: "Contract",
            method: "Remote Friendly",
            location: "Location lable",
            data: "Posted about 10 hours ago",
            image: "",
            link: ""
        },
    ]

    return (
        <div className='App'>
            <Header style='white' />
            <TitleSection />
            <MainSection>
                {/* Title */}
                <Title title='Latest New Projects' />
                <LeftRightSection>
                    <LeftSection width='70%'>
                        <OpportunitiesList OpportunitiesItems={OpportunitiesItems} />
                    </LeftSection>
                    <RightSection width='20%'>

                    </RightSection>
                </LeftRightSection>
                <Footer />
            </MainSection>
            <Basement />
        </div>
    )
}

export default Opportunities