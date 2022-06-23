import React, { FunctionComponent } from 'react'
import ButtonSubmit from '../../UI/Form/ButtonSubmit/ButtonSubmit'
import Description from '../../UI/Form/Description/Description'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Form/Input/Input'
import Select from '../../UI/Form/Select/Select'
import Textarea from '../../UI/Form/Textarea/Textarea'
import Title from '../../UI/Form/Title/Title'
import classes from '../create_project.module.scss'

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

  return (
    <Form action='post'>
      {/* Title */}
      <Title title='Submit your project'
        marginBottom={15} />
      {/* Description */}
      <Description description="Do you have a project and want to share it with the community? You're in the right place!"
        marginBottom={30} />

      {/* Steps */}

      {/* Firts Step */}
      {/* Name */}
      <Input
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
        placeholder='Proect title'
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

      {/* Second Step */}
      {/* Forum Url */}
      {/* Typeform_competitor_popup */}
      {/* Typeform_question_popup */}
      {/* Website Url */}


      {/* Third Step */}
      {/* Upload logo */}

      {/* Firth Step */}
      {/* Upload Gallery Images */}

      {/* Fifth Step */}
      {/* Recent Updates */}

      {/* Sixth Step */}
      {/* FAQ */}

      {/* Button Submit */}
      <ButtonSubmit name='Next Step'
        type='button' />
    </Form>

  )
}

export default CreateProjectForm