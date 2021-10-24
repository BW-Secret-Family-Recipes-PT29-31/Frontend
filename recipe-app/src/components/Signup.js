import React from 'react';




class Signup extends React.Component {
    state = {
        credentials: {
          username: '',
          email: '',
          password: '',
          confirm_password: ''
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
            <form>
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
              <label for="confirm_password">Confirm Password: </label>
              <input
                type="password"
                name="confirm_password"
                value={this.state.credentials.confirm_password}
                onChange={this.handleChange}
              />
              <button>Signup</button>
            </form>
          </div>
        );
      }
}
export default Signup;