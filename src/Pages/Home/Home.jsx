import React from "react"
import Form from "../../features/Form"
import "./Home.scss"
import pizza from "../../images/pizza.png"
import soup from "../../images/dfg.png"

function Home() {
  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="floating one">
          <img src={pizza} alt="" />
        </div>
        <div className="floating two">
          <img src={soup} alt="" />
        </div>
        <div className="container">
          <h1 className="heading">Recipe</h1>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home
