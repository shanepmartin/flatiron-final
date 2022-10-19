import { useState, useEffect, forwardRef, useRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"


// input area for description of the skill...
const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewSkill = () => {

    const handleSkillSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/skills`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                type: formRef.current.root[1].value,
                description: formRef.current.root[2].value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("name your skill !"),
        type: StringType().isRequired("type of skill ?"),
        description: StringType().isRequired("describe your skill !")
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>New Skill</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleSkillSubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>Name</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Skill Name</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='type'>
                    <Form.ControlLabel>Type</Form.ControlLabel>
                    <Form.Control name='type' />
                    <Form.HelpText tooltip>Type</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.ControlLabel>Description</Form.ControlLabel>
                    <Form.Control rows={13} name='description' accepter={Textarea} />
                    <Form.HelpText tooltip>Description</Form.HelpText>
                </Form.Group>
                <ButtonToolbar>
                    <Whisper
                        placement='right'
                        trigger='active'
                        speaker={<Popover arrow={false}>Clicked</Popover>}>
                        <Button appearance='ghost' type='submit'>
                            Submit
                        </Button>

                    </Whisper>

                </ButtonToolbar>

            </Form>
        </>
    )

}

export default NewSkill;