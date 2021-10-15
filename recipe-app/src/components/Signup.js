import React from 'react';



class Signup extends React.Component {
    state = {
        credentials: {
          username: '',
          email: '',
          password: ''
        }
      };
    
      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      render() {
        return (
          <div className="signin">
              <p>Signup to see all the recipes</p>
            <form >
            <label for="username">Username: </label>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <label for="email">Email: </label>
              <input
                type="text"
                name="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
              />
              <label for="password">Password: </label>
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button>Signup</button>
            </form>
          </div>
        );
      }
}
export default Signup;