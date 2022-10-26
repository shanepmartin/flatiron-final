import { useRef, forwardRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper, Panel, PanelGroup } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewAchievement = () => {

    const handleAchievementSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/achievements`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                date: formRef.current.root[1].value,
                category: formRef.current.root[2].value,
                description: formRef.current.root[3].value,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }


    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("please enter a name"),
        date: StringType().isRequired("please enter today's date"),
        category: StringType().isRequired("please enter an category"),
        description: StringType().isRequired("please enter a description")
    })

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <div className="form-heading-div" style={styles}>
                <h1 className="form-new-heading">New Achievement</h1>
                <PanelGroup>
                    <Form 
                        className="form-new"
                        ref={formRef}
                        model={model}
                        onSubmit={handleAchievementSubmit}
                        fluid
                    >
                        <Form.Group controlId='name' >
                            <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                            <Form.Control name='name' />
                            <Form.HelpText tooltip>please enter the name of your achievement</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId='date'>
                            <Form.ControlLabel><h2>date</h2></Form.ControlLabel>
                            <Form.Control name='date' />
                            <Form.HelpText tooltip>please enter the date you made your achievement</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId='category'>
                            <Form.ControlLabel><h2>category</h2></Form.ControlLabel>
                            <Form.Control name='category' />
                            <Form.HelpText tooltip>please enter the category of your achievement</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.ControlLabel><h2>description</h2></Form.ControlLabel>
                            <Form.Control rows={13} name='entry' accepter={Textarea} />
                            <Form.HelpText tooltip>please enter a description of your achievement</Form.HelpText>
                        </Form.Group>
                        <ButtonToolbar>
                            <Whisper
                                placement='right'
                                trigger='active'
                                speaker={<Popover arrow={false}>Submitted!</Popover>}>
                                <Button 
                                    appearance='subtle' 
                                    type='submit'>
                                    <h2>Submit</h2>
                                </Button>
                            </Whisper>
                        </ButtonToolbar>
                    </Form>
                </PanelGroup>
            </div>
        </>
    )
}

export default NewAchievement;