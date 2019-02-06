import React from "react";
import TextField from "@material-ui/core/TextField";
import { ValidatorComponent } from "react-form-validator-core";

class TextValidator extends ValidatorComponent {
  render() {
    /* eslint-disable no-unused-vars */
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <TextField
        {...rest}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    );
  }
}

export default TextValidator;
