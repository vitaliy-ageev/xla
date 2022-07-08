import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { ISteps } from '../../models/IProject'
import { DeleteTag } from '../../models/ITag'
import { useDeleteTagMutation, useFetchAllTagsQuery } from '../../services/tagsService'
import { resetField, resetValidate, validateField } from '../../store/reducers/validateSlice/validateSlice'
import ButtonSubmit from '../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../UI/Form/Description/Description'
import Error from '../UI/Form/Error/Error'
import Form from '../UI/Form/Form'
import Select from '../UI/Form/Select/Select'
import Steps from '../UI/Form/Step/Steps'
import Success from '../UI/Form/Success/Success'
import Title from '../UI/Form/Title/Title'

const InitialState: DeleteTag = {
    id: 1,
}

const DeleteTagForm: FunctionComponent = (props) => {
    const steps = [
        { id: 0, title: "Delete tag", description: "Please fill in all required fields below!", isActive: true, isValidate: false }
    ]

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [formValue, setFormValue] = useState<DeleteTag>(InitialState)
    const {
        id
    } = formValue

    const [tag_id, setTag_id] = useState<string>("")
    const [limitTag, setLimitTag] = useState<number>(0)

    const { data: tags } = useFetchAllTagsQuery(limitTag)

    const [
        deleteTag, {
            data: deleteTagData,
            isSuccess: isDeleteTagSuccess,
            isError: isDeleteTagError,
            error: deleteTagError
        }
    ] = useDeleteTagMutation()

    const [stp, setStp] = useState<ISteps[]>(steps)
    const [titleCmp, setTitleCmp] = useState<string>(steps[0].title)
    const [desc, setDesc] = useState<string>(steps[0].description)
    const [stepState, setStepState] = useState<number>(0)

    const [isDelete, setIsDelete] = useState<boolean | string>('')

    const {
        isValidate,
        tagsError
    } = useAppSelector(state => state.validateReducer)
    const validateRuls = (step?: number) => {
        if (stepState == 0 || step === 0) {
            dispatch(validateField({ element: 'tags', value: tag_id, required: true }))
        }
    }

    const tagHandle = (e: any) => {
        if (e.target.value) {
            setTag_id(e.target.value)
        }

        e.target.reset()
    }

    const handleSubmit = async () => {
        try {
            validateRuls()
            if (isValidate) {
                const deleteTagData: any = await deleteTag(tag_id).unwrap()
                setFormValue(InitialState)
                dispatch(resetValidate(false))

                console.log('form', {
                    id
                })
            }
        } catch (e: any) {
            console.log("Error", e)
        }
    }

    useEffect(() => {
        if (isDeleteTagSuccess) {
            setIsDelete(true)
            setTag_id("")
        }
    }, [isDeleteTagSuccess])

    useEffect(() => {
        if (isDeleteTagError) {
            setIsDelete(false)

        }
    }, [isDeleteTagError])

    useEffect(() => {
        if (tags) {
            setLimitTag(tags.total)
        }
    }, [tags])

    useEffect(() => {
        if (tag_id !== '') {
            validateRuls()
            setIsDelete('')
        }
    }, [tag_id])

    useEffect(() => {
        dispatch(resetField())
    }, [])

    const headerStepHandler = (step: ISteps) => { }


    return (
        <Form action='post'>
            {/* Title */}
            <Title title={titleCmp}
                marginBottom={15} />
            {/* Description */}
            <Description description={desc}
                marginBottom={30} />
            {/* Steps */}
            <Steps steps={stp}
                marginBottom={0}
                onClick={headerStepHandler}
            />

            {/* First Step */}
            {stepState === 0 ?
                <>
                    {isDelete === true ? <Success text='Excellent. The category has been successfully deleted.' /> : <></>}
                    {isDelete === false ? <Error text='A technical error has occurred. Please try again later.' /> : <></>}
                    {/* Category */}
                    <Select
                        label='Category'
                        name='category'
                        placeholder='Select category for delete'
                        options={tags?.tags}
                        onSelect={tagHandle}
                        error={tagsError ? tagsError : ""}
                    />
                    {/* Button Submit */}
                    <ButtonSubmit name='Delete Tag'
                        type='button'
                        onClick={handleSubmit} />
                </>
                : <></>}
        </Form>
    )
}

export default DeleteTagForm