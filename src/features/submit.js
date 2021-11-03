

import { reset } from "redux-form"
import { SubmissionError } from 'redux-form'


async function postData(url = "", data = {}, dispatch) {
  const resp = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })

  if (resp.status === 200 || resp.status === 201) {
    alert("Your data has been submitted")
    return reset('recipe')
  }
  else {
    const error = await resp.json()
    throw new SubmissionError(error)
  }
}

export default function submit(values, dispatch) {
  return postData(
    "https://frosty-wood-6558.getsandbox.com:443/dishes",
    values
  ).then(callback => dispatch(callback))
}
