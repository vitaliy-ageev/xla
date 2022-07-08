import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { DeleteCategory } from '../../models/ICategory'
import { ISteps } from '../../models/IProject'
import { useDeleteCategoryMutation, useFetchAllCategoriesQuery } from '../../services/categoryService'
import { resetField, resetValidate, validateField } from '../../store/reducers/validateSlice/validateSlice'
import ButtonSubmit from '../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../UI/Form/Description/Description'
import Error from '../UI/Form/Error/Error'
import Form from '../UI/Form/Form'
import Select from '../UI/Form/Select/Select'
import Steps from '../UI/Form/Step/Steps'
import Success from '../UI/Form/Success/Success'
import Title from '../UI/Form/Title/Title'

const InitialState: DeleteCategory = {
    id: -1,
}

const DeleteCategoryForm: FunctionComponent = (props) => {
    const steps = [
        { id: 0, title: "Delete category", description: "Please fill in all required fields below!", isActive: true, isValidate: false }
    ]

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [formValue, setFormValue] = useState<DeleteCategory>(InitialState)
    const {
        id
    } = formValue

    const [category_id, setCategory_id] = useState<string>("")
    const [limitCategories, setLimitCategories] = useState<number>(0)

    const { data: categories } = useFetchAllCategoriesQuery(limitCategories)

    const [
        deleteCategory, {
            data: deleteCategoryData,
            isSuccess: isDeleteCategorySuccess,
            isError: isDeleteCategoryError,
            error: deleteCategoryError
        }
    ] = useDeleteCategoryMutation()

    const [stp, setStp] = useState<ISteps[]>(steps)
    const [titleCmp, setTitleCmp] = useState<string>(steps[0].title)
    const [desc, setDesc] = useState<string>(steps[0].description)
    const [stepState, setStepState] = useState<number>(0)

    const [isDelete, setIsDelete] = useState<boolean | string>('')

    const {
        isValidate,
        categoryError
    } = useAppSelector(state => state.validateReducer)
    const validateRuls = (step?: number) => {
        if (stepState == 0 || step === 0) {
            dispatch(validateField({ element: 'categories', value: category_id, required: true }))
        }
    }

    const categoryHandle = (e: any) => {
        if (e.target.value) {
            setCategory_id(e.target.value)
        }

        e.target.reset()
    }

    const handleSubmit = async () => {
        try {
            validateRuls()
            if (isValidate) {
                const deleteCategoryData: any = await deleteCategory(category_id).unwrap()
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
        if (isDeleteCategorySuccess) {
            setIsDelete(true)
            setCategory_id("")
        }
    }, [isDeleteCategorySuccess])

    useEffect(() => {
        if (isDeleteCategoryError) {
            setIsDelete(false)

        }
    }, [isDeleteCategoryError])

    useEffect(() => {
        if (categories) {
            setLimitCategories(categories.total)
        }
    }, [categories])

    useEffect(() => {
        if (category_id !== '') {
            validateRuls()
            setIsDelete('')
        }
    }, [category_id])

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
                        options={categories?.categories}
                        value={category_id}
                        onSelect={categoryHandle}
                        error={categoryError ? categoryError : ""}
                    />
                    {/* Button Submit */}
                    <ButtonSubmit name='Delete Category'
                        type='button'
                        onClick={handleSubmit} />
                </>
                : <></>}
        </Form>
    )
}

export default DeleteCategoryForm