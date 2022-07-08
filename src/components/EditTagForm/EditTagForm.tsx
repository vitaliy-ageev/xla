import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { ISteps } from '../../models/IProject'
import { CreateTag } from '../../models/ITag'
import { useFetchAllTagsQuery, useFetchOneTagQuery, useUpdateTagMutation } from '../../services/tagsService'
import { resetField, resetValidate, validateField } from '../../store/reducers/validateSlice/validateSlice'
import ButtonSubmit from '../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../UI/Form/Description/Description'
import Error from '../UI/Form/Error/Error'
import Form from '../UI/Form/Form'
import Input from '../UI/Form/Input/Input'
import Select from '../UI/Form/Select/Select'
import Steps from '../UI/Form/Step/Steps'
import Success from '../UI/Form/Success/Success'
import Title from '../UI/Form/Title/Title'

const InitialState: CreateTag = {
    key: '',
    name: ''
}

const EditTagForm: FunctionComponent = (props) => {
    const steps = [
        { id: 0, title: "Update tag", description: "Please fill in all required fields below!", isActive: true, isValidate: false }
    ]

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [formValue, setFormValue] = useState<CreateTag>(InitialState)
    const {
        key,
        name
    } = formValue

    const [tag_id, setTag_id] = useState<string>('')
    const [limitTags, setLimitTags] = useState<number>(0)

    const { data: tags } = useFetchAllTagsQuery(limitTags)
    // const { data: tag } = useFetchOneTagQuery(tag_id)

    const [
        updateTag, {
            data: updateTagData,
            isSuccess: isUpdateTagSuccess,
            isError: isUpdateTagError,
            error: updateTagError
        }
    ] = useUpdateTagMutation()

    const [stp, setStp] = useState<ISteps[]>(steps)
    const [titleCmp, setTitleCmp] = useState<string>(steps[0].title)
    const [desc, setDesc] = useState<string>(steps[0].description)
    const [stepState, setStepState] = useState<number>(0)

    const [isCreate, setIsCreate] = useState<boolean | string>('')

    const {
        isValidate,
        tagsError,
        nameError,
        keyError
    } = useAppSelector(state => state.validateReducer)
    const validateRuls = (step?: number) => {
        if (stepState == 0 || step === 0) {
            dispatch(validateField({ element: 'tags', value: tag_id, required: true, }))
            dispatch(validateField({ element: 'name', value: name, required: true, minLenght: 5, maxLenght: 40 }))
            dispatch(validateField({ element: 'key', value: key, required: true, minLenght: 5, maxLenght: 40 }))
        }
    }

    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const tagHandle = (e: any) => {
        if (e.target.value) {
            setTag_id(e.target.value)
        }
    }

    const headerStepHandler = (step: ISteps) => { }

    const handleCreate = async () => {
        try {
            validateRuls()
            if (isValidate) {
                const tagID = Number(tag_id)
                const updateTagData: any = await updateTag({
                    id: tagID,
                    tag: {
                        name,
                        key
                    }
                }).unwrap()
                setFormValue(InitialState)
                dispatch(resetValidate(false))

                console.log('form', {
                    name,
                    key
                })
            }
        } catch (e: any) {
            console.log("Error", e)
        }
    }

    useEffect(() => {
        if (isUpdateTagSuccess) {
            setIsCreate(true)
        }
    }, [isUpdateTagSuccess])

    useEffect(() => {
        if (isUpdateTagError) {
            setIsCreate(false)
        }
    }, [isUpdateTagError])

    useEffect(() => {
        if (tags) {
            setLimitTags(tags.total)
        }
    }, [tags])

    // useEffect(() => {
    //     if (tag_id) {
    //         setFormValue({
    //             ...formValue,
    //             name: tag?.name ? tag?.name : '',
    //             key: tag?.key ? tag?.key : '',
    //         })
    //     }
    // }, [tag])

    useEffect(() => {
        if (name !== '' || key !== '') {
            validateRuls()
            setIsCreate('')
        }
    }, [formValue])

    useEffect(() => {
        dispatch(resetField())
    }, [])

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
                    {isCreate === true ? <Success text='Excellent. The category has been successfully changed.' /> : <></>}
                    {isCreate === false ? <Error text='A technical error has occurred. Please try again later.' /> : <></>}
                    {/* Category */}
                    <Select
                        label='Tag'
                        name='tag'
                        placeholder='Select tag for edit'
                        options={tags?.tags}
                        onSelect={tagHandle}
                        error={tagsError ? tagsError : ""}
                    />
                    {/* Name */}
                    <Input
                        label='Name'
                        type="text"
                        name="name"
                        placeholder='Tag name'
                        value={name}
                        onChange={handleChange}
                        error={nameError ? nameError : ""}
                    />
                    {/* Key */}
                    <Input
                        label='Key'
                        type="text"
                        name="key"
                        placeholder='Tag key'
                        value={key}
                        onChange={handleChange}
                        error={keyError ? keyError : ""}
                    />
                    {/* Button Submit */}
                    <ButtonSubmit name='Edit Tag'
                        type='button'
                        onClick={handleCreate} />
                </>
                : <></>}

        </Form>
    )
}

export default EditTagForm