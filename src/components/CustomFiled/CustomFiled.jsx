import React from "react"
import style from "./style.module.scss"
import Label from "../Label"
import classnames from "classnames"
import { PropTypes } from "prop-types"


function CustomFiled(props) {
  let {
    label,
    type,
    meta: { touched, error, warning },
    inputClassName,
    inputcomponent: InputComponent = "input",
    id,
    options,
    input,
  } = props

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div className={style.inputSpan}>
      <InputComponent
        placeholder={label}
        className={classnames(style.popUp, style.numberInput, inputClassName)}
        type={type}
        id={id}
        {...input}
        {...props}
      >
        {options &&
          options.map((option, index) => (
            <option value={option} key={index}>
              {capitalizeFirstLetter(option)}
            </option>
          ))}
      </InputComponent>
      <Label id={id} className={style.label}>
        {label}
      </Label>
      {touched &&
        ((error && <span className={style.error}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}


CustomFiled.propTypes ={
  label:PropTypes.string,
  type:PropTypes.string,
  meta: PropTypes.object,
  inputClassName:PropTypes.any,
  inputcomponent: PropTypes.any,
  id:PropTypes.string,
  options:PropTypes.array,
  input:PropTypes.any
}

export default CustomFiled
