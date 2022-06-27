import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/hooks'
import { ICreateProjectAdmin, ISteps } from '../../../models/IProject'
import { useFetchAllCategoriesQuery } from '../../../services/categoryService'
import { useCreateProjectMutation } from '../../../services/user/userAdminService'
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

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const stepHandle = () => {
    setStepState(stepState + 1)
    const newSteps = steps.map((stps) => (
      stps.id === (stepState + 1) ?
        { ...stps, isActive: true }
        : { ...stps, isActive: false }
    ))
    setStp(newSteps)
    setTitleCmp(steps[stepState].title)
    setDesc(steps[stepState].description)
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
            label='Project'
            type="text"
            name="name"
            placeholder='Proect name'
            onChange={handleChange}
          />
          {/* Title */}
          <Input
            label='Title'
            type="text"
            name="title"
            placeholder='Project title'
            onChange={handleChange}
          />
          {/* Description */}
          <Textarea label="Description"
            name="description"
            maxLength={400}
            placeholder="A description of the project"
            onChange={handleChange}
          />
          {/* Category */}
          <Select label='Category'
            name='categories'
            placeholder='Select category project'
            options={category?.categories}
            onSelect={handleChange}
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
            name="forum"
            placeholder='https://example.com'
            onChange={handleChange}
          />
          {/* Website Url */}
          <Input label="Website url"
            type='text'
            name="website"
            placeholder='https://example.com'
            onChange={handleChange}
          />
          {/* Typeform_competitor_popup */}
          <Input label="Compretitor typeform"
            type='text'
            name="compretitor"
            placeholder='#1235434'
            onChange={handleChange}
          />
          {/* Typeform_question_popup */}
          <Input label="Question typeform"
            type='text'
            name="question"
            placeholder='#1235434'
            onChange={handleChange}
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