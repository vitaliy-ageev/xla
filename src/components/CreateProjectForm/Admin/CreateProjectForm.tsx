import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { ICreateProject, ISteps } from '../../../models/IProject'
import { useFetchAllCategoriesQuery } from '../../../services/categoryService'
import validateSlice, { resetField, resetValidate, validateField, validateSubmit } from '../../../store/reducers/validateSlice/validateSlice'
import ButtonSubmit from '../../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../../UI/Form/Description/Description'
import Image from '../../UI/Form/Image/Image'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Select from '../../UI/Form/Select/Select'
import Steps from '../../UI/Form/Step/Steps'
import Textarea from '../../UI/Form/Textarea/Textarea'
import Title from '../../UI/Form/Title/Title'
import { useCreateProjectMutation, useDeleteImagesMutation, useUploadImagesMutation } from '../../../services/projectService'


interface IImage {
  id: number,
  name: string,
  size: string,
  type: string,
}

const InitialState: ICreateProject = {
  name: '',
  title: '',
  description: '',
  logo: '',
  // images: [],
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
    // images,
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
  const [
    uploadImages,
    {
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
      error: uploadError
    }
  ] = useUploadImagesMutation()
  const [
    deleteImages,
    {
      data: deleteImgData,
      isSuccess: isDeleteImgSuccess,
      isError: isDeleteImgError,
      error: deleteImgError
    }
  ] = useDeleteImagesMutation()

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
    startDateError,
    closeDateError,
    logoError,
    imagesError,
  } = useAppSelector(state => state.validateReducer)
  const blurHandle = (e: any) => {
    // switch (e.target.name) {
    // case 'name':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 40 }))
    //   break;
    // case 'title':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 40 }))
    //   break
    // case 'description':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 400 }))
    //   break
    // case 'categories':
    //   dispatch(validateField({ element: e, required: true }))
    //   break
    // case 'forum_url':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 100 }))
    //   break
    // case 'url':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 100 }))
    //   break
    // case 'typeform_competitor_popup':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 9 }))
    //   break
    // case 'typeform_question_popup':
    //   dispatch(validateField({ element: e, required: true, minLenght: 5, maxLenght: 9 }))
    //   break
    // case 'start_date':
    //   dispatch(validateField({ element: e, required: true }))
    //   break
    // case 'close_date':
    //   dispatch(validateField({ element: e, required: false }))
    //   break
    // case 'logo':
    //   dispatch(validateField({ element: e, required: true }))
    //   break
    // case 'images':
    //   dispatch(validateField({ element: e, required: true }))
    //   break
    // }
  }

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const [logotype, setLogotype] = useState<IImage[]>([])
  const handleLogoChange = async (e: any) => {
    // setFormValue({ ...formValue, logo: e.target.value })
    // blurHandle(e)
    const formData = new FormData()
    if (e.target.files.length > 0) {
      console.log("e.target", e.target.files[0])
      formData.append("file", e.target.files[0])
      const uploadData: any = await uploadImages(formData)
      if (uploadData) {
        console.log('upload', uploadData)
        // setLogotype(uploadData)
      }
    }
  }

  console.log('logotype', logotype)

  const resetLogotypeHandler = (e: any) => {
    setLogotype(logotype.filter(p => p.id !== e.id))
    setFormValue({ ...formValue, "logo": '' })
    dispatch(resetValidate(false))
  }

  const [image, setImage] = useState<IImage[]>([])
  const handleImageChange = (e: any) => {
    // blurHandle(e)
    if (e.target.files.length > 0) {
      let arr: any = []
      let imgForm: any = []
      for (let i = 0; i <= e.target.files.length; i++) {
        arr.push({
          id: i,
          name: e.target.files[i].name,
          size: e.target.files[i].size,
          type: e.target.files[i].type
        })
        imgForm.push('C:\\fakepath\\' + e.target.files[i].name)
        setImage(arr)
        // setFormValue({ ...formValue, images: imgForm })
      }
      arr = []
      setImage(arr)
    }
  }

  const resetImageHandler = (e: any) => {
    setImage(image.filter(p => p.id !== e.id))
    // setFormValue({ ...formValue, "images": [] })
    // dispatch(resetValidate(false))
  }

  const selectChange = (e: any) => {
    setFormValue({
      // ...formValue, categories: [{ id: e.target.value.split(',')[0], name: e.target.value.split(',')[1], key: e.target.value.split(',')[2] }]
      ...formValue, categories: []
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
    //   dispatch(validateSubmit({ element: 'start_date', value: start_date, required: true }))
    //   dispatch(validateSubmit({ element: 'close_date', value: close_date, required: false }))
    // }

    if (stepState == 2) {
      dispatch(validateSubmit({ element: 'logo', value: logo, required: true }))
    }

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
      if (stepState == 3) {
        // dispatch(resetValidate(true))
        // dispatch(validateSubmit({ element: 'images', value: images, required: true }))
      }
      if (isValidate) {
        // const projectData: any = await createProject({
        //   name,
        //   title,
        //   description,
        //   logo,
        //   // images,
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
        // setImage([])
        // setLogotype([])
        // dispatch(resetValidate(false))

        console.log('form', {
          name,
          title,
          description,
          logo,
          // images,
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
    setFormValue({ ...formValue, start_date: new Date().toISOString().split('T')[0], close_date: '2025-01-01' })
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
          <Input
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
          {/* Date Start */}
          <Input label="Date start"
            type='date'
            name="start_date"
            min='2022-01-01'
            max='2025-01-01'
            value={start_date}
            onChange={handleChange}
            onBlur={blurHandle}
            error={startDateError ? startDateError : ""}
          />
          {/* Date Close */}
          <Input label="Date close"
            type='date'
            name="close_date"
            min='2022-01-01'
            max='2025-01-01'
            value={close_date as string}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            onChange={handleChange}
            onBlur={blurHandle}
            error={closeDateError ? closeDateError : ""}
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
          <Image name='file'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
            onChange={handleLogoChange}
            image={logotype}
            accept='.png, .jpg, .jpeg'
            multiple={false}
            resetHandler={resetLogotypeHandler}
            error={logoError}
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
          <Image name='images'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
            onChange={handleImageChange}
            image={image}
            accept='.png, .jpg, .jpeg'
            multiple={true}
            resetHandler={resetImageHandler}
            error={imagesError}
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