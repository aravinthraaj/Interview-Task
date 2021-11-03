import { reset, SubmissionError } from "redux-form"

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
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
  return response
}

export default function submit(values, dispatch) {
  console.log(values.name)
  if(values.name==="aaa"){
    throw new SubmissionError({
      name: 'User does not exist',
      _error: 'Login failed!'
    })
  }
  else{
    dispatch(reset("recipe"))

  }

  postData("https://frosty-wood-6558.getsandbox.com:443/dishes", values)
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        dispatch(reset("recipe"))
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((e) => console.error(e))
}
