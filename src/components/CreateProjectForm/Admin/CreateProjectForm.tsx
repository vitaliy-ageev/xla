import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { FileUpload, ICreateProject, ISteps, ResponceImagesUpload } from '../../../models/IProject'
import { useFetchAllCategoriesQuery } from '../../../services/categoryService'
import validateSlice, { resetField, resetValidate, validateField } from '../../../store/reducers/validateSlice/validateSlice'
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
import Error from '../../UI/Form/Error/Error'
import { validate } from '@babel/types'

const InitialState: ICreateProject = {
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
    { id: 0, title: "Create new project", description: "Please fill in all required fields below!", isActive: true, isValidate: false },
    { id: 1, title: "Projects Links", description: "Please fill in all required fields below!", isActive: false, isValidate: false },
    { id: 2, title: "Logotype", description: "Upload project logotype.", isActive: false, isValidate: false },
    { id: 3, title: "Screenshots", description: "You can upload a maximum of three screenshots of your project.", isActive: false, isValidate: false },
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
  const [limitCategories, setLimitCategories] = useState<number>(0)
  const { data: category } = useFetchAllCategoriesQuery(limitCategories)
  const [createProject,
    {
      data: projectData,
      isSuccess: isProjectSuccess,
      isError: isProjectError,
      error: projectrror
    }
  ] = useCreateProjectMutation()
  const [
    uploadLogotype,
    {
      data: uploadLogotypeData,
      isSuccess: isUploadLogotypeSuccess,
      isError: isUploadLogotypeError,
      error: uploadLogotypeError
    }
  ] = useUploadImagesMutation()
  const [
    uploadImages,
    {
      data: uploadImagesData,
      isSuccess: isUploadImagesSuccess,
      isError: isUploadImagesError,
      error: uploadImagesError
    }
  ] = useUploadImagesMutation()
  const [
    deleteImage,
    {
      data: deleteImageData,
      isSuccess: isDeleteImageSuccess,
      isError: isDeleteImageError,
      error: ddeleteImageError
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
  const validateRuls = (step?: number) => {
    if (stepState == 0 || step === 0) {
      dispatch(validateField({ element: 'name', value: name, required: true, minLenght: 5, maxLenght: 40 }))
      dispatch(validateField({ element: 'title', value: title, required: true, minLenght: 5, maxLenght: 40 }))
      dispatch(validateField({ element: 'description', value: description, required: true, minLenght: 5, maxLenght: 400 }))
      dispatch(validateField({ element: 'categories', value: categories, required: true }))
    }
    if (stepState == 1 || step === 1) {
      dispatch(validateField({ element: 'forum_url', value: forum_url, required: true, minLenght: 5, maxLenght: 100 }))
      dispatch(validateField({ element: 'url', value: url, required: true, minLenght: 5, maxLenght: 100 }))
      dispatch(validateField({ element: 'typeform_competitor_popup', value: typeform_competitor_popup, required: true, minLenght: 5, maxLenght: 9 }))
      dispatch(validateField({ element: 'typeform_question_popup', value: typeform_question_popup, required: true, minLenght: 5, maxLenght: 9 }))
      dispatch(validateField({ element: 'start_date', value: start_date, required: true }))
      dispatch(validateField({ element: 'close_date', value: close_date, required: true }))
    }
    if (stepState == 2 || step === 2) {
      dispatch(validateField({ element: 'logo', value: logo, required: true }))
    }
    if (stepState == 3 || step === 3) {
      dispatch(validateField({ element: 'images', value: images, required: true }))
    }
  }

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const [logotype, setLogotype] = useState<ResponceImagesUpload[]>([])
  const [thisLogo, setThisLogo] = useState<any>()
  const handleLogoChange = async (e: any) => {
    const file = new FormData()
    if (e.target.files.length > 0) {
      setThisLogo(e.target.files[0])
      file.append("file", e.target.files[0])
      const provider = 'create_project_logo'
      const uploadLogotypeData: any = await uploadLogotype({
        provider,
        file
      })
    }
  }

  useEffect(() => {
    if (isUploadLogotypeSuccess) {
      setLogotype([{
        isUpload: true,
        fileUpload: uploadLogotypeData
      }])
      setFormValue({ ...formValue, logo: uploadLogotypeData?.object_key })
    }
  }, [isUploadLogotypeSuccess])

  useEffect(() => {
    if (isUploadLogotypeError) {
      setLogotype([{
        isUpload: false,
        fileUpload: {
          file_name: thisLogo?.name,
          file_size: thisLogo?.size,
          object_key: '',
          source: ''
        }
      }])
    }
  }, [isUploadLogotypeError])

  const resetLogotypeHandler = async (e: FileUpload) => {
    const deleteImageData: any = await deleteImage(e.object_key)
    setLogotype([])
    setFormValue({ ...formValue, logo: '' })
    dispatch(resetValidate(false))
  }

  const [image, setImage] = useState<ResponceImagesUpload[]>([])
  const [imageKey, setImageKey] = useState<string[] | any>([])
  const [thisImages, setThisImages] = useState<any>()
  const handleImageChange = async (e: any) => {

    const file = new FormData()
    if (e.target.files.length > 0) {
      setThisImages(e.target.files[0])
      file.append("file", e.target.files[0])
      const provider = 'create_project_image'
      const uploadImagesData: any = await uploadImages({
        provider,
        file
      })
    }
  }

  useEffect(() => {
    if (isUploadImagesSuccess) {
      setImage([...image, {
        isUpload: true,
        fileUpload: uploadImagesData
      }])
      setImageKey([...imageKey, uploadImagesData?.object_key])
    }
  }, [isUploadImagesSuccess])

  useEffect(() => {
    setFormValue({ ...formValue, images: imageKey })
  }, [imageKey])

  useEffect(() => {
    if (isUploadImagesError) {
      setImage([...image, {
        isUpload: false,
        fileUpload: {
          file_name: thisImages?.name,
          file_size: thisImages?.size,
          object_key: '',
          source: ''
        }
      }])
    }
  }, [isUploadImagesError])

  const resetImageHandler = (e: any) => {
    setImage(image.filter(p => p.fileUpload?.object_key !== e.fileUpload?.object_key))
    setImageKey(imageKey.filter((p: string) => p !== e.fileUpload?.object_key))
    dispatch(resetValidate(false))
  }

  const selectChange = (e: any) => {
    setFormValue({
      ...formValue, categories: [Number(e.target.value)]
    })
  }

  const stepHandle = () => {
    if (stepState === 0) {
      setFormValue({ ...formValue, start_date: new Date().toISOString().split('T')[0], close_date: '2025-01-01' })
    }

    validateRuls()
    if (isValidate) {
      setStepState(stepState + 1)
      const newSteps: ISteps[] = steps.map((stps) => (
        stps.id === (stepState + 1) ?
          { ...stps, isActive: true }
          : (stps.id) < (stepState + 1) ?
            { ...stps, isActive: false, isValidate: true }
            : { ...stps, isActive: false }
      ))
      setStp(newSteps)
      setTitleCmp(steps[(stepState + 1)].title)
      setDesc(steps[(stepState + 1)].description)
      dispatch(resetValidate(false))
    }
  }

  const headerStepHandler = (step: ISteps) => {
    // if (step.isValidate || step.isActive) {
    //   setStepState(step.id)
    //   setTitleCmp(steps[step.id].title)
    //   setDesc(steps[step.id].description)
    // }
  }

  const handleCreate = async () => {
    try {
      validateRuls()
      if (isValidate) {
        const projectData: any = await createProject({
          name,
          title,
          description,
          logo,
          images,
          categories,
          // tags,
          url,
          forum_url,
          typeform_competitor_popup,
          typeform_question_popup,
          start_date,
          close_date
        }).unwrap()
        setFormValue(InitialState)
        setImage([])
        setLogotype([])
        dispatch(resetValidate(false))

        console.log('form', {
          name,
          title,
          description,
          logo,
          images,
          categories,
          // tags,
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
    if (category) {
      setLimitCategories(category?.total)
    }
  }, [category])

  useEffect(() => {
    if (name !== '') {
      validateRuls()
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
        marginBottom={30}
        onClick={headerStepHandler} />

      {/* Firts Step */}
      {stepState === 0 ?
        <>
          {/* Name */}
          <Input
            label='Name'
            type="text"
            name="name"
            placeholder='Proect name'
            value={name}
            onChange={handleChange}
            error={nameError ? nameError : ""}
          />
          {/* Title */}
          <Input
            label='Title'
            type="text"
            name="title"
            placeholder='Project title'
            value={title}
            onChange={handleChange}
            error={titleError ? titleError : ""}
          />
          {/* Description */}
          <Textarea label="Description"
            name="description"
            maxLength={400}
            placeholder="A description of the project"
            value={description}
            onChange={handleChange}
            error={descriptionError ? descriptionError : ""}
          />
          {/* Category */}
          <Select label='Category'
            name='categories'
            placeholder='Select category project'
            value={categories ? categories[0] : -1}
            options={category?.categories}
            onSelect={selectChange}
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
            value={forum_url}
            onChange={handleChange}
            error={forumError ? forumError : ""}
          />
          {/* Website Url */}
          <Input label="Website url"
            type='text'
            name="url"
            placeholder='https://example.com'
            value={url}
            onChange={handleChange}
            error={websiteError ? websiteError : ""}
          />
          {/* Typeform_competitor_popup */}
          <Input label="Competitor typeform"
            type='text'
            name="typeform_competitor_popup"
            placeholder='#1235434'
            value={typeform_competitor_popup}
            onChange={handleChange}
            error={compretitorError ? compretitorError : ""}
          />
          {/* Typeform_question_popup */}
          <Input label="Question typeform"
            type='text'
            name="typeform_question_popup"
            placeholder='#1235434'
            value={typeform_question_popup}
            onChange={handleChange}
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
          {isProjectError ? <Error text='A technical error has occurred. Please try again later.' /> : <></>}
          {/* Upload Gallery Images */}
          <Image name='file'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
            onChange={handleImageChange}
            image={image}
            accept='.png, .jpg, .jpeg'
            multiple={false}
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