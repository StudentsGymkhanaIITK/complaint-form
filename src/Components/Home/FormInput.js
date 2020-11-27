
import React, { Component } from "react";

class FormInput extends Component {
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Other *</label>
          <input
            className="form-control"
            type="text"
            name="entry.770045899"
            onChange={this.onChange}
            required
          />
        </div>
      </div>
    );
  }
}

export default FormInput;
