import React, { FunctionComponent } from 'react'
import Article from '../Article/Article'
import LeftRightSection from '../LeftRightSection/LeftRightSection'
import LeftSection from '../LeftRightSection/LeftSection'
import RightSection from '../LeftRightSection/RightSection'
import Projects from '../Projects/Projects'
import Title from '../UI/Title/Title'
import classes from './MainSection.module.scss'

const MainSection: FunctionComponent = () => {
    const categorieItems = [
        { id: 1, name: "All projects", count: 24, isActive: true },
        { id: 2, name: "Developed", count: 14, isActive: false },
        { id: 3, name: "Launched", count: 8, isActive: false },
    ]

    const projectItems = [
        {
            id: 1,
            name: "Babka cryptex",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 2,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 3,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 4,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 5,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 6,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 7,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 8,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 9,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
        {
            id: 10,
            name: "Name project",
            description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            likes: "11,299",
            tags: [
                { id: 1, name: "WEB 3", path: "/" },
                { id: 1, name: "Revenue sharing", path: "/" },
                { id: 3, name: "Revenue sharing", path: "/" },
                { id: 4, name: "Crypto", path: "/" }
            ],
            background: "/"
        },
    ]

    return (
        <div className={classes.main_section}>
            <div className='container'>
                {/* Title */}
                <Title title='BROWSE PROJECTS BASED ON THEIR SPECIALITY AND STATUS' />
                <LeftRightSection>
                    <LeftSection>
                        {/* Projects */}
                        <Projects projectItems={projectItems} categorieItems={categorieItems} />
                    </LeftSection>
                    <RightSection>
                        {/* Article */}
                        <Article />
                    </RightSection>
                </LeftRightSection>
            </div>
        </div >
    )
}

export default MainSection