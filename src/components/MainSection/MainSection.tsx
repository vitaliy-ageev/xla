import React, { FunctionComponent, MutableRefObject, ReactElement, Ref, RefObject } from 'react'
import Article from '../Article/Article'
import LastThreads from '../LastThreads/LastThreads'
import LeftRightSection from '../LeftRightSection/LeftRightSection'
import LeftSection from '../LeftRightSection/LeftSection'
import RightSection from '../LeftRightSection/RightSection'
import OpportunityHiring from '../OpportunityHiring/OpportunityHiring'
import Projects from '../ProjectsList/ProjectsList'
import Title from '../UI/Title/Title'
import classes from './MainSection.module.scss'

interface IMainSection {
    style?: string,
    children: ReactElement | ReactElement[]
}

const MainSection: FunctionComponent<IMainSection> = ({ style, children }) => {
    let rootClasses = [classes.main_section]

    if (style == 'project_page') {
        rootClasses.push(classes.project_page)
    } else if (style == 'opportuniti_page') {
        rootClasses.push(classes.opportuniti_page)
    } else if (style == 'main_page') {
        rootClasses.push(classes.main_page)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className='container'>
                {children}
            </div>
        </div >
    )
}

export default MainSection