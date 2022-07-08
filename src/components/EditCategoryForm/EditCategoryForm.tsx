import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { CreateCategory } from '../../models/ICategory'
import { ISteps } from '../../models/IProject'
import { useFetchAllCategoriesQuery, useFetchOneCaregoryQuery, useUpdateCategoryMutation } from '../../services/categoryService'
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

const InitialState: CreateCategory = {
    key: '',
    name: ''
}

const EditCategoryForm: FunctionComponent = (props) => {
    const steps = [
        { id: 0, title: "Update category", description: "Please fill in all required fields below!", isActive: true, isValidate: false }
    ]

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [formValue, setFormValue] = useState<CreateCategory>(InitialState)
    const {
        key,
        name
    } = formValue

    const [category_id, setCategory_id] = useState<string>('')
    const [limitCategories, setLimitCategories] = useState<number>(0)

    const { data: categories } = useFetchAllCategoriesQuery(limitCategories)
    // const { data: category } = useFetchOneCaregoryQuery(category_id)

    const [
        updateCategory, {
            data: updateCategoryData,
            isSuccess: isUpdateCategorySuccess,
            isError: isUpdateCategoryError,
            error: updateCategoryError
        }
    ] = useUpdateCategoryMutation()

    const [stp, setStp] = useState<ISteps[]>(steps)
    const [titleCmp, setTitleCmp] = useState<string>(steps[0].title)
    const [desc, setDesc] = useState<string>(steps[0].description)
    const [stepState, setStepState] = useState<number>(0)

    const [isCreate, setIsCreate] = useState<boolean | string>('')

    const {
        isValidate,
        categoryError,
        nameError,
        keyError
    } = useAppSelector(state => state.validateReducer)
    const validateRuls = (step?: number) => {
        if (stepState == 0 || step === 0) {
            dispatch(validateField({ element: 'categories', value: category_id }))
            dispatch(validateField({ element: 'name', value: name, required: true, minLenght: 5, maxLenght: 40 }))
            dispatch(validateField({ element: 'key', value: key, required: true, minLenght: 5, maxLenght: 40 }))
        }
    }

    const handleChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const categoryHandle = (e: any) => {
        if (e.target.value) {
            setCategory_id(e.target.value)
        }
    }

    const headerStepHandler = (step: ISteps) => { }

    const handleCreate = async () => {
        try {
            validateRuls()
            if (isValidate) {
                const categoryID = Number(category_id)
                const updateCategoryData: any = await updateCategory({
                    id: categoryID,
                    category: {
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
        if (isUpdateCategorySuccess) {
            setIsCreate(true)
        }
    }, [isUpdateCategorySuccess])

    useEffect(() => {
        if (isUpdateCategoryError) {
            setIsCreate(false)
        }
    }, [isUpdateCategoryError])

    useEffect(() => {
        if (categories) {
            setLimitCategories(categories.total)
        }
    }, [categories])

    // useEffect(() => {
    //     if (category_id) {
    //         setFormValue({
    //             ...formValue,
    //             name: category?.name ? category?.name : '',
    //             key: category?.key ? category?.key : '',
    //         })
    //     }
    // }, [category])

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
                        label='Category'
                        name='category'
                        placeholder='Select category for edit'
                        options={categories?.categories}
                        onSelect={categoryHandle}
                        error={categoryError ? categoryError : ""}
                    />
                    {/* Name */}
                    <Input
                        label='Name'
                        type="text"
                        name="name"
                        placeholder='Category name'
                        value={name}
                        onChange={handleChange}
                        error={nameError ? nameError : ""}
                    />
                    {/* Key */}
                    <Input
                        label='Key'
                        type="text"
                        name="key"
                        placeholder='Category key'
                        value={key}
                        onChange={handleChange}
                        error={keyError ? keyError : ""}
                    />
                    {/* Button Submit */}
                    <ButtonSubmit name='Edit Category'
                        type='button'
                        onClick={handleCreate} />
                </>
                : <></>}
        </Form>
    )
}

export default EditCategoryForm