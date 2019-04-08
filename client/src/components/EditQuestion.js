import React from 'react'
import { Form, FormDropdown, } from 'semantic-ui-react'
import axios from 'axios';

class EditQuestion extends React.Component {
  state = { name: "", explanation: "", choices: []}

  componentDidMount() {
    const { name, explanation, choices} = this.props
    this.setState({ name, explanation, choices})
  }

  handleChange = (e) => {
    const { name, value, } = e.target
    this.setState({ [name]: value, })
  }

  handleChoiceChange = (e) => {
    const choice = this.state.choices[e.target.name]
    debugger
    this.setState({ [this.state.choices[e.name].answer]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const question = { name: this.state.name, explanation: this.state.explanation}
    const { quiz_id, question_id, } =  this.props;
    const { choices } =  this.state
    axios.put(`/api/quizzes/${quiz_id}/questions/${question_id}`, question)
      .then( res => console.log(res))
      .catch( err => console.log(err))
    choices.map( choice => {
      axios.put(`/api/questions/${question_id}/choices/${choice.id}`, choice)
        .then( res => console.log(res))
        .catch( err => console.log(err))
    })
  }

  render() {
    const { name, explanation, choices, } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Edit Question Text"
        value={name}
        name="name"
        onChange={this.handleChange}

        />
        <Form.Input
        label="Edit Explanation"
        value={explanation}
        name="explanation"
        onChange={this.handleChange}

        />
        {choices.map( (choice, index ) => (
          <>
            <Form.Input
            label="Edit Choice"
            value={this.state.choices[index].answer}
            name={index}
            onChange={this.handleChoiceChange}
            />
            <Form.Checkbox
            checked={choice.correct_answer ? true : false}
            />
          </>
        ))}
        <Form.Button inverted>Update</Form.Button>
      </Form>
    )
  }
}
export default EditQuestion;