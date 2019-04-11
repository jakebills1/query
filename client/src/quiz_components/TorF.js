import React from "react"
import axios from "axios"
import styled from "styled-components"
import { Radio, Form } from "semantic-ui-react"


class TorF extends React.Component {
    state = { answer: ""}
    render() {
        return (
            <ListItem>
                <strong>{this.props.question}</strong>
                {this.props.choices.map(choice => {
                    return (
                        <ChoiceItem>
                            <Form.Field>
                                <Radio 
                                    value={this.state.answer} 
                                    onChange={this.handleChange}
                                /> 
                                {choice.answer}
                            </Form.Field>
                        </ChoiceItem>
                    )
                })}
            </ListItem>
        )
    }
}

const ListItem = styled.li`
    padding: 10px;
    font-size: 1.5rem;
    margin: 0 0 20px 0;
    list-style-type: none;
    `
const ChoiceItem = styled.li`
    margin: 10px;
    font-size: 1rem;
    list-style-type: none;
    `
export default TorF;