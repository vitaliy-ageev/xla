import React, { FunctionComponent, useEffect, useState } from 'react'
import Basement from '../components/Basement/Basement'
import FilterOpportunities from '../components/FilterOpportunities/FilterOpportunities'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LeftRightSection from '../components/LeftRightSection/LeftRightSection'
import LeftSection from '../components/LeftRightSection/LeftSection'
import RightSection from '../components/LeftRightSection/RightSection'
import MainSection from '../components/MainSection/MainSection'
import OpportunitiesList from '../components/OpportunitiesList/OpportunitiesList'
import TitleSection from '../components/TitleSection/TitleSection'
import Title from '../components/UI/Title/Title'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { statusAPI } from '../services/StatusService'
import { workingModeAPI } from '../services/WorkingModeService'
import { jobTypeAPI } from '../services/JobTypeService'
import { projectAPI } from '../services/projectService'

const Opportunities: FunctionComponent = () => {
    window.scrollTo(0, 0);

    let category: any = []
    // const { data: statuses } = statusAPI.useFetchAllStatusesQuery();
    // const { data: jobTypes } = jobTypeAPI.useFetchAllStatusesQuery();
    // const { data: workingMode } = workingModeAPI.useFetchAllStatusesQuery();

    const { data: projects } = projectAPI.useFetchAllProjectsQuery(100);

    let project: any = []
    projects?.projects.forEach((item, i, arr) => {
        project.push({ id: item.id, name: item.name, key: item.name })
    })

    category.push(
        // { id: 1, title: "Status project", isChecked: 1, category: statuses },
        // { id: 2, title: "Location", isChecked: 1, category: jobTypes },
        // { id: 3, title: "Working-method", isChecked: 2, category: workingMode },

        { id: 4, title: "Projects", isChecked: 1, category: project }
    )

    return (
        <div className='App'>
            <Header style='white' />
            <TitleSection />
            <MainSection>
                {/* Title */}
                <Title title='Latest New Projects' />
                <LeftRightSection>
                    <LeftSection className='opportunities'>
                        <OpportunitiesList />
                    </LeftSection>
                    <RightSection className='opportunities'>
                        <FilterOpportunities category={category} />
                    </RightSection>
                </LeftRightSection>
            </MainSection>
            <Footer />
            <Breadcrumbs location='Home/Opportunities' path='/metamall' />
            <Basement />
        </div>
    )
}

export default Opportunities