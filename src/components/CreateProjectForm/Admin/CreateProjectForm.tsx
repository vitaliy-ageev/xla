import React, { FunctionComponent, useState } from 'react'
import ButtonSubmit from '../../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../../UI/Form/Description/Description'
import File from '../../UI/Form/File/File'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Select from '../../UI/Form/Select/Select'
import Steps from '../../UI/Form/Step/Steps'
import Textarea from '../../UI/Form/Textarea/Textarea'
import Title from '../../UI/Form/Title/Title'


interface ISteps {
  id: number,
  title: string,
  description: string,
  isActive: boolean,
}

const CreateProjectForm: FunctionComponent = (props) => {
  const category = [
    { id: 1, name: "Babka drop", key: "babka" },
    { id: 2, name: "Multiverse", key: "babka" },
    { id: 3, name: "Metaverse", key: "babka" },
    { id: 4, name: "Story3", key: "babka" },
    { id: 5, name: "Drop", key: "babka" },
  ]

  const tags = [
    { id: 1, name: "web3", key: "babka" },
    { id: 2, name: "design", key: "babka" },
    { id: 3, name: "dev", key: "babka" },
    { id: 4, name: "opportunity", key: "babka" },
    { id: 5, name: "Drop", key: "babka" },
  ]

  const steps = [
    { id: 0, title: "Create new project", description: "Please fill in all required fields below!", isActive: true },
    { id: 1, title: "Projects Links", description: "Please fill in all required fields below!", isActive: false },
    { id: 2, title: "Logotype", description: "Upload project logotype.", isActive: false },
    { id: 3, title: "Screenshots", description: "You can upload a maximum of three screenshots of your project.", isActive: false },
    { id: 4, title: "Screenshots", description: "You can upload a maximum of three screenshots of your project.", isActive: false},
  ]

  const [stp, setStp] = useState<ISteps[]>(steps)
  const [title, setTitle] = useState<string>(steps[0].title)
  const [description, setDescription] = useState<string>(steps[0].description)
  const [stepState, setStepState] = useState<number>(0)

  const firstStepHandle = () => {
    const newSteps = steps.map((stps) => (
      stps.id === 1 ?
        { ...stps, isActive: true }
        : { ...stps, isActive: false }
    ))
    setStp(newSteps)
    setStepState(1)
    setTitle(steps[1].title)
    setDescription(steps[1].description)
  }

  const secondStepHandle = () => {
    const newSteps = steps.map((stps) => (
      stps.id === 2 ?
        { ...stps, isActive: true }
        : { ...stps, isActive: false }
    ))
    setStp(newSteps)
    setStepState(2)
    setTitle(steps[2].title)
    setDescription(steps[2].description)
  }

  const thirdStepHandle = () => {
    const newSteps = steps.map((stps) => (
      stps.id === 3 ?
        { ...stps, isActive: true }
        : { ...stps, isActive: false }
    ))
    setStp(newSteps)
    setStepState(3)
    setTitle(steps[3].title)
    setDescription(steps[3].description)
  }

  const fourthStepHandle = () => {
    const newSteps = steps.map((stps) => (
      stps.id === 0 ?
        { ...stps, isActive: true }
        : { ...stps, isActive: false }
    ))
    setStp(newSteps)
    setStepState(0)
    setTitle(steps[0].title)
    setDescription(steps[0].description)
  }

  return (
    <Form action='post'>
      {/* Title */}
      <Title title={title}
        marginBottom={15} />
      {/* Description */}
      <Description description={description}
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
            name="project"
            placeholder='Proect name'
          />
          {/* Title */}
          <Input
            label='Title'
            type="text"
            name="title"
            placeholder='Project title'
          />
          {/* Description */}
          <Textarea label="Description"
            name="description"
            maxLength={400}
            placeholder="A description of the project"
          />
          {/* Category */}
          <Select label='Category'
            name='category'
            placeholder='Select category project'
            options={category}
          />
          {/* Tags */}
          <Select label='Tags'
            name='tags'
            placeholder='Select tags project'
            options={tags}
          />
          {/* Button Submit */}
          <ButtonSubmit name='Next Step'
            type='button'
            onClick={firstStepHandle} />
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
          />
          {/* Typeform_competitor_popup */}
          <Input label="Compretitor typeform"
            type='text'
            name="compretitor"
            placeholder='#1235434'
          />
          {/* Typeform_question_popup */}
          <Input label="Question typeform"
            type='text'
            name="question"
            placeholder='#1235434'
          />
          {/* Website Url */}
          <Input label="Website link"
            type='text'
            name="website"
            placeholder='https://example.com'
          />
          {/* Button Submit */}
          <ButtonSubmit name='Next Step'
            type='button'
            onClick={secondStepHandle} />
        </>
        : <></>
      }


      {/* Third Step */}
      {stepState === 2 ?
        <>
          {/* Upload logo */}
          <File name='logotype'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
          />
          {/* Button Submit */}
          <ButtonSubmit name='Final Step'
            type='button'
            onClick={thirdStepHandle} />
        </>
        : <></>
      }

      {/* Firth Step */}
      {stepState === 3 ?
        <>
          {/* Upload Gallery Images */}
          <File name='gallery'
            placeholder='Click to upload or darg and drop PNG, JPG (max 20mb)'
          />
          {/* Button Submit */}
          <ButtonSubmit name='Submit Form'
            type='button'
            onClick={fourthStepHandle}
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