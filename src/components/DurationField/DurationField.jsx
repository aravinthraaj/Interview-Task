import React from "react"
import MaskedInput from "react-text-mask"
import styles from "./style.module.scss"
import classnames from "classnames"
import { PropTypes } from "prop-types"

function DurationField(props) {
  let {
    id,
    label,
    type,
    inputClassName,
    input,
    meta: { touched, error, warning },
  } = props

  return (
    <div className={styles.inputSpan}>
      <MaskedInput
        placeholder="00:00:00"
        {...input}
        className={classnames(styles.popUp, inputClassName)}
        id={id}
        type={type}
        {...props}
        mask={[/[0-9]/, /[0-9]/, ":", /[0-5]/, /[0-9]/, ":", /[0-5]/, /[0-9]/]}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {touched &&
        ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

DurationField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  inputClassName: PropTypes.any,
  id: PropTypes.string,
  input: PropTypes.any,
}

export default DurationField
