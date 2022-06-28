import React, { FunctionComponent, useState } from 'react'
import Buttons from '../../ProjectItem/Buttons/Buttons'
import Button from '../../UI/Admin/Button/Button'
import Container from '../../UI/Admin/Container/Container'
import Row from '../../UI/Admin/Container/Row/Row'
import Menu from '../../UI/Admin/Menu/Menu'
import Panel from '../../UI/Admin/Panel/Panel'
import Title from '../../UI/Admin/Title/Title'

const AdminPanel: FunctionComponent = (props) => {
    const panels = [
        {
            id: 1, title: "Project", buttons: [
                { id: 1, name: "Create", path: "/metamall/project/create", style: "green" },
                { id: 2, name: "Edit", path: "", style: "grey" },
            ]
        },
        {
            id: 2, title: "Opportunity", buttons: [
                { id: 1, name: "Create", path: "", style: "green" },
                { id: 2, name: "Edit", path: "", style: "grey" },
            ]
        },
        {
            id: 3, title: "Categories", buttons: [
                { id: 1, name: "Create", path: "", style: "green" },
                { id: 3, name: "Edit", path: "", style: "grey" },
                { id: 2, name: "Delete", path: "", style: "red" },
            ]
        },
        {
            id: 4, title: "Tags", buttons: [
                { id: 1, name: "Create", path: "", style: "green" },
                { id: 3, name: "Edit", path: "", style: "grey" },
                { id: 2, name: "Delete", path: "", style: "red" },
            ]
        },
    ]

    const [visible, setVisible] = useState<boolean>(false)
    const clickHandler = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <>
            <Panel onClick={clickHandler}>
                <Menu visible={visible}>
                    {panels ?
                        panels.map(panel =>
                            <>
                                <Container key={panel.id}>
                                    <Title title={panel.title} />
                                    <>
                                        {
                                            panel.buttons.map(button =>
                                                <Button key={button.id} name={button.name} path={button.path} style={button.style} />
                                            )
                                        }
                                    </>
                                </Container>
                            </>

                        )
                        : <></>}
                </Menu>
            </Panel>

        </>
    )
}

export default AdminPanel