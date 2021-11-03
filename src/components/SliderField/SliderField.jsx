import React from "react"
import styles from "./style.module.scss"
import { PropTypes } from "prop-types"

function SliderField(props) {
  let {
    label,
    input,
    meta: { touched, error, warning },
  } = props
  const { value, onChange } = input
  return (
    <div className={styles.inputSpan}>
      <input
        {...input}
        className={styles.sliderInput}
        type="range"
        value={value || 1}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        {...props}
      />
      <label htmlFor="" className={styles.label}>
        {label}
      </label>

      {touched &&
        ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      <p className={styles.value}>{value}</p>
    </div>
  )
}

SliderField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.any,
}

export default SliderField
