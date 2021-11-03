import React from "react"
import { connect, useDispatch } from "react-redux"
import { Field, reduxForm, formValueSelector } from "redux-form"
import { validate } from "../features/validate"
import submit from "../features/submit"
import SliderField from "../components/SliderField"
import CustomFiled from "../components/CustomFiled/CustomFiled"
import { PropTypes } from "prop-types"
import DurationField from "../components/DurationField"
import styles from "./style.module.scss"

let Form = (props) => {
  const { foodType, handleSubmit } = props
  const dispatch = useDispatch()
  const dynamicFieldcustom = (foodType) => {
    switch (foodType) {
      case "pizza":
        return (
          <>
            <Field
              name="no_of_slices"
              component={CustomFiled}
              type="number"
              label="No if slices"
              placeholder="2"
              min={1}
              max={10}
              step={1}
              parse={(val) => parseFloat(val, 10)}
            />
            <Field
              name="diameter"
              component={CustomFiled}
              type="number"
              label="Diameter"
              placeholder="30.0"
              min={15}
              max={100}
              step={0.1}
              parse={(val) => parseFloat(val, 10.0)}
            />
          </>
        )
      case "soup":
        return (
          <Field
            name="spiciness_scale"
            component={SliderField}
            type="range"
            label="Spicy Level"
            min="1"
            max="10"
            step="1"
            parse={(val) => parseFloat(val, 10)}
          />
        )
      case "sandwich":
        return (
          <Field
            name="slices_of_bread"
            component={CustomFiled}
            type="number"
            label="Number of slices"
            placeholder="2"
            min={1}
            max={100}
            step={1}
            parse={(val) => parseFloat(val, 10)}
          />
        )
      default:
    }
  }

  return (
    <form onSubmit={handleSubmit((values) => submit(values, dispatch))}>
      <Field name="name" id="name" component={CustomFiled} label="Name" />
      <Field
        name="preparation_time"
        component={DurationField}
        type="text"
        label="Preparation Time"
        placeholder="00:00:00"
      />
      <Field
        name="type"
        id="type"
        component={CustomFiled}
        inputcomponent="select"
        options={["pizza", "soup", "sandwich"]}
        label="type"
      />
      {foodType && dynamicFieldcustom(foodType)}
      <div className={styles.btnWrapper}>
        <button className={styles.btn} type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

const selector = formValueSelector("recipe")
Form = connect((state) => {
  const foodType = selector(state, "type")

  return {
    foodType,
  }
})(Form)

Form = reduxForm({
  // a unique name for the form
  form: "recipe",
  validate,
})(Form)

Form.propTypes = {
  foodType: PropTypes.string,
  handleSubmit: PropTypes.func,
}

export default Form
