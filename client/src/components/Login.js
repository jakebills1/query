import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Header, Grid, Container} from 'semantic-ui-react';
import Navbar from "./Navbar"
class Login extends React.Component {
  state = { email: "", password: ""}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password,} =  this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history)
  }

  render() {
    document.body.style = 'background: #5906A3;'
    const { email, password, } = this.state;
    return (  
      <div>
<Navbar />
      <Container>
      <Grid>
        <Grid.Column textAlign="center">
      <Header style={{color: "#fff", fontSize: "100px", textAlign: "center",}}>
        Login
      </Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        placeholder="Email"
        name="email"
        required
        value={email}
        onChange={this.handleChange}
        />
        <Form.Input
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={this.handleChange}
        type="password"
        />
        <Button inverted>Log-in</Button>
      </Form>
</Grid.Column>
        </Grid>
        </Container>
        </div>
    )
  }
}
export default class ConnectedLogin extends React.Component{
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}