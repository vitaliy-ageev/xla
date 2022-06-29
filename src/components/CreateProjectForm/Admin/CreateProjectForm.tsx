import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { ICreateProjectAdmin, ISteps } from '../../../models/IProject'
import { useFetchAllCategoriesQuery } from '../../../services/categoryService'
import { useCreateProjectMutation } from '../../../services/user/userAdminService'
import validateSlice, { resetField, resetValidate, validateField, validateSubmit } from '../../../store/reducers/validateSlice/validateSlice'
import ButtonSubmit from '../../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../../UI/Form/Description/Description'
import File from '../../UI/Form/File/File'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Select from '../../UI/Form/Select/Select'
import Steps from '../../UI/Form/Step/Steps'
import Textarea from '../../UI/Form/Textarea/Textarea'
import Title from '../../UI/Form/Title/Title'


const InitialState: ICreateProjectAdmin = {
  name: '',
  title: '',
  description: '',
  logo: '',
  images: [],
  categories: [],
  tags: [],
  url: '',
  forum_url: '',
  typeform_competitor_popup: '',
  typeform_question_popup: '',
  start_date: '',
  close_date: '',
}

const CreateProjectForm: FunctionComponent = (props) => {
  const steps = [
    { id: 0, title: "Create new project", description: "Please fill in all required fields below!", isActive: true },
    { id: 1, title: "Projects Links", description: "Please fill in all required fields below!", isActive: false },
    { id: 2, title: "Logotype", description: "Upload project logotype.", isActive: false },
    { id: 3, title: "Screenshots", description: "You can upload a maximum of three screenshots of your project.", isActive: false },
  ]

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formValue, setFormValue] = useState(InitialState)
  const {
    name,
    title,
    description,
    logo,
    images,
    categories,
    tags,
    url,
    forum_url,
    typeform_competitor_popup,
    typeform_question_popup,
    start_date,
    close_date,
  } = formValue
  const { data: category } = useFetchAllCategoriesQuery()
  const [createProject,
    {
      data: projectData,
      isSuccess: isProjectSuccess,
      isError: isProjectError,
      error: projectrror
    }
  ] = useCreateProjectMutation()

  const [stp, setStp] = useState<ISteps[]>(steps)
  const [titleCmp, setTitleCmp] = useState<string>(steps[0].title)
  const [desc, setDesc] = useState<string>(steps[0].description)
  const [stepState, setStepState] = useState<number>(0)

  const {
    isValidate,
    nameError,
    titleError,
    descriptionError,
    categoryError,
    forumError,
    websiteError,
    compretitorError,
    questionError,
  } = useAppSelector(state => state.validateReducer)
  const blurHandle = (e: any) => {
    // switch (e.target.name) {
    //   case 'name':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 40 }))
    //     break;
    //   case 'title':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 40 }))
    //     break
    //   case 'description':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 400 }))
    //     break
    //   case 'categories':
    //     dispatch(validateField({ element: e, required: true }))
    //     break
    //   case 'forum_url':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 100 }))
    //     break
    //   case 'url':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 100 }))
    //     break
    //   case 'typeform_competitor_popup':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 9 }))
    //     break
    //   case 'typeform_question_popup':
    //     dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 9 }))
    //     break
    // }
  }
  const [file, setFile] = useState()
  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
    console.log('ele', e.target.files)
    if (e.target.files.length > 0) {
      setFile(e.target.files)
    }
  }

  const selectChange = (e: any) => {
    setFormValue({
      ...formValue, categories: [{ id: e.target.value.split(',')[0], name: e.target.value.split(',')[1], key: e.target.value.split(',')[2] }]
    })

  }

  const stepHandle = () => {
    // if (stepState == 0) {
    //   dispatch(validateSubmit({ element: 'name', value: name, required: true }))
    //   dispatch(validateSubmit({ element: 'title', value: title, required: true }))
    //   dispatch(validateSubmit({ element: 'description', value: description, required: true }))
    //   dispatch(validateSubmit({ element: 'categories', value: categories, required: true }))
    // }
    // if (stepState == 1) {
    //   dispatch(validateSubmit({ element: 'forum_url', value: forum_url, required: true }))
    //   dispatch(validateSubmit({ element: 'url', value: url, required: true }))
    //   dispatch(validateSubmit({ element: 'typeform_competitor_popup', value: typeform_competitor_popup, required: true }))
    //   dispatch(validateSubmit({ element: 'typeform_question_popup', value: typeform_question_popup, required: true }))
    // }

    if (isValidate) {
      setStepState(stepState + 1)
      const newSteps = steps.map((stps) => (
        stps.id === (stepState + 1) ?
          { ...stps, isActive: true }
          : { ...stps, isActive: false }
      ))
      setStp(newSteps)
      setTitleCmp(steps[stepState].title)
      setDesc(steps[stepState].description)
      // dispatch(resetValidate(false))
    }
  }
  const handleCreate = async () => {
    try {
      if (name && title) {
        // const projectData: any = await createProject({
        //   name,
        //   title,
        //   description,
        //   logo,
        //   images,
        //   categories,
        //   tags,
        //   url,
        //   forum_url,
        //   typeform_competitor_popup,
        //   typeform_question_popup,
        //   start_date,
        //   close_date
        // }).unwrap()
        // setFormValue(InitialState)

        console.log({
          name,
          title,
          description,
          logo,
          images,
          categories,
          tags,
          url,
          forum_url,
          typeform_competitor_popup,
          typeform_question_popup,
          start_date,
          close_date
        })
      }
    } catch (e: any) {
      console.log("Error", e)
    }

  }

  useEffect(() => {
    if (isProjectSuccess) {
      navigate("/metamall")
    }
  }, [isProjectSuccess])

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
        marginBottom={30} />

      {/* Firts Step */}
      {stepState === 0 ?
        <>
          {/* Name */}
          < Input
            label='Name'
            type="text"
            name="name"
            placeholder='Proect name'
            onChange={handleChange}
            onBlur={blurHandle}
            error={nameError ? nameError : ""}
          />
          {/* Title */}
          <Input
            label='Title'
            type="text"
            name="title"
            placeholder='Project title'
            onChange={handleChange}
            onBlur={blurHandle}
            error={titleError ? titleError : ""}
          />
          {/* Description */}
          <Textarea label="Description"
            name="description"
            maxLength={400}
            placeholder="A description of the project"
            onChange={handleChange}
            onBlur={blurHandle}
            error={descriptionError ? descriptionError : ""}
          />
          {/* Category */}
          <Select label='Category'
            name='categories'
            placeholder='Select category project'
            options={category?.categories}
            onSelect={selectChange}
            onBlur={blurHandle}
            error={categoryError ? categoryError : ""}
          />
          {/* Button Submit */}
          <ButtonSubmit name='Next Step'
            type='button'
            onClick={stepHandle} />
        </>
        : <></>
      }

      {/* Second Step */}
      {stepState === 1 ?
        <>
          {/* Forum Url */}
          <Input label="Forum url"
            type='text'
            name="forum_url"
            placeholder='https://example.com'
            onChange={handleChange}
            onBlur={blurHandle}
            error={forumError ? forumError : ""}
          />
          {/* Website Url */}
          <Input label="Website url"
            type='text'
            name="url"
            placeholder='https://example.com'
            onChange={handleChange}
            onBlur={blurHandle}
            error={websiteError ? websiteError : ""}
          />
          {/* Typeform_competitor_popup */}
          <Input label="Competitor typeform"
            type='text'
            name="typeform_competitor_popup"
            placeholder='#1235434'
            onChange={handleChange}
            onBlur={blurHandle}
            error={compretitorError ? compretitorError : ""}
          />
          {/* Typeform_question_popup */}
          <Input label="Question typeform"
            type='text'
            name="typeform_question_popup"
            placeholder='#1235434'
            onChange={handleChange}
            onBlur={blurHandle}
            error={questionError ? questionError : ""}
          />
          {/* Button Submit */}
          <ButtonSubmit name='Next Step'
            type='button'
            onClick={stepHandle} />
        </>
        : <></>
      }


      {/* Third Step */}
      {stepState === 2 ?
        <>
          {/* Upload logo */}
          <File name='logotype'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
            onChange={handleChange}
            file={file}
          />
          {/* Button Submit */}
          <ButtonSubmit name='Final Step'
            type='button'
            onClick={stepHandle} />
        </>
        : <></>
      }

      {/* Firth Step */}
      {stepState === 3 ?
        <>
          {/* Upload Gallery Images */}
          <File name='gallery'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
            onChange={handleChange}
            file={file}
          />
          {/* Button Submit */}
          <ButtonSubmit name='Submit Form'
            type='button'
            onClick={handleCreate}
          />
        </>
        : <></>
      }

      {/* Fifth Step */}
      {/* Recent Updates */}

      {/* Sixth Step */}
      {/* FAQ */}

    </Form >

  )
}

export default CreateProjectForm