export const validate = (values) => {
  const errors = {}
  const requiredFields = [
    "name",
    "preparation_time",
    "type",
    "no_of_slices",
    "diameter",
    "slices_of_bread",
    "spiciness_scale",
  ]
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required"
    }
  })

  if (values.type === "soup") {
    if (!values.spiciness_scale) {
      errors["spiciness_scale"] = "Required"
    }
  }

  return errors
}
