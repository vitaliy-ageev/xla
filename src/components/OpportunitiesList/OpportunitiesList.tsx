import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { IOpportunity } from '../../models/IOpportunity'
import { RouteNames } from '../../routes/routes'
import { opportunityAPI } from '../../services/opportunityService'
import { Embed } from '../../utils/embed'
import { getPageCount } from '../../utils/pages'
import Blur from '../ProjectsList/ProjectListItem/Blur/Blur'
import CustomButton from '../UI/CustomButton/CustomButton'
import classes from './OpportunitiesList.module.scss'

const OpportunitiesList: FunctionComponent = () => {
    const [limit, setLimit] = useState<number>(10)
    const [offset, setOffset] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [posts, setPosts] = useState<IOpportunity[]>([])
    const { projectId } = useAppSelector(state => state.filterReducer)
    const { data: opportunities } = opportunityAPI.useFetchAllOpportunitiesQuery({ limit: limit, offset: offset, project_id: projectId })

    useEffect(() => {
        setOffset(1)
    }, [projectId])

    useEffect(() => {
        const totalCount: number = opportunities?.total as number
        setTotalPages(getPageCount(totalCount - 1, limit))

        if (offset == 1) {
            setPosts(opportunities?.opportunities as IOpportunity[])
        } else {
            setPosts([...posts, ...opportunities?.opportunities as IOpportunity[]])
        }

    }, [opportunities])

    setTimeout(() => {
        Embed()
    }, 10)

    const onClickItem = (e: any) => {
        e.preventDefault()
    }

    const showMoreFunc = () => {
        setCurrentPage(currentPage + 1)
        setOffset(offset + limit)
    }

    return (
        <div className={classes.opportunities_list}>
            {posts && posts.map(opportunity =>
                <Link to={RouteNames.OPPORTUNITY + '/id=' + opportunity.id} key={opportunity.id} className={classes.opportunities_list_item}>
                    <div className={classes.opportunities_list_item_left}>
                        {/* Background */}
                        <div className={classes.opportunities_list_item_background} style={{
                            background: `url(${opportunity.project.logo_url})`
                        }}>
                            <Blur />
                        </div>
                    </div>
                    <div className={classes.opportunities_list_item_right}>
                        <div className={classes.opportunities_list_item_container_left}>
                            {/* Title */}
                            <span className={classes.opportunities_list_item_title}>
                                {opportunity.name}
                            </span>
                            <span className={classes.opportunities_list_item_tags_container}>
                                {/* Tags */}
                                <span className={classes.opportunities_list_item_name_project}>
                                    {opportunity.project.name}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_type}>
                                    {opportunity.job_type.name}
                                </span>
                                <div className={classes.opportunities_list_item_delimiter}></div>
                                <span className={classes.opportunities_list_item_method}>
                                    {opportunity.working_mode.name}
                                </span>
                            </span>
                            <div className={classes.opportunities_list_item_hover}></div>

                            <div className={classes.opportunities_list_item_buttons}>
                                <div>
                                    <CustomButton styleBtn='border' marginR={20} width={200} color='black' style='opportunities_list'>
                                        <button>View offer</button>
                                    </CustomButton>
                                </div>
                                <div>
                                    <CustomButton styleBtn='border' width={200} color='black' style='opportunities_list'>
                                        <button
                                            data-tf-slider={opportunity.typeform_apply_popup ? opportunity.typeform_apply_popup.toString().split('"')[1] : ''}
                                            data-tf-width="550"
                                            data-tf-iframe-props={`title=${opportunity.name}`}
                                            data-tf-medium="snippet"
                                            data-tf-hidden="hidden1=xxxxx"

                                            onClick={(e) => onClickItem(e)}
                                        >Apply now</button>
                                    </CustomButton>
                                </div>

                            </div>
                        </div>
                        <div className={classes.opportunities_list_item_container_right}>
                            {/* Location & Data */}
                            {/* <div className={classes.opportunities_list_item_location_block}>
                                {opportunity.location && <>
                                    <span className={classes.opportunities_list_item_location}>
                                        <Location />
                                        <span>{opportunity.location}</span>
                                    </span></>}
                                <span className={classes.opportunities_list_item_data}>
                                    {new Date(opportunity.created_at).toDateString()}
                                </span>
                            </div> */}
                        </div>
                    </div>

                </Link>
            )
            }

            {totalPages > 1 && currentPage != totalPages ?
                < div onClick={showMoreFunc}
                    className={classes.opportunities_list_show_more}>
                    Show more
                </div> : ''
            }
        </div >
    )
}

export default OpportunitiesList