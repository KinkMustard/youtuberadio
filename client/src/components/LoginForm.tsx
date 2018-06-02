import * as React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class LoginForm extends React.Component {
  public render() {
    return (
      <div>
        <p>Please Login</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginForm);
