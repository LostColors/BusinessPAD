import React from "react";
import { connect } from "react-redux";
import { isLogedIn } from "../../actions";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  redirectComponent = () => {
    return <Navigate to="/" />;
  };
  componentDidMount() {
    console.log(this.props.logedIn);
  }
  componentDidUpdate(prevProps) {
    if (this.props.logedIn !== prevProps.logedIn) {
      console.log(this.props.logedIn);
    }
  }
  render() {
    const { onLogin, logedIn } = this.props;
    if (logedIn) {
      return this.redirectComponent();
    }
    return (
      <div>
        <button onClick={() => onLogin()}>Login</button>
      </div>
    );
  }
}
const mapStateToProps = ({ logedIn }) => {
  return {
    logedIn,
  };
};
const mapDispatchToProps = {
  onLogin: isLogedIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
