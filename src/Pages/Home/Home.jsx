import React from "react"
import Form from "../../features/Form"
import styles from "./style.module.scss"
import classnames from "classnames"
import pizza from "../../images/pizza.png"
import soup from "../../images/dfg.png"

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <div className={classnames(styles.floating, styles.floatingOne)}>
          <img src={pizza} alt="" className={styles.imagePizza}/>
        </div>
        <div className={classnames(styles.floating, styles.floatingTwo)}>
          <img src={soup} alt=""  className={styles.image}/>
        </div>
        <div className={styles.container}>
          <h1 className={styles.heading}>Recipe</h1>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home
