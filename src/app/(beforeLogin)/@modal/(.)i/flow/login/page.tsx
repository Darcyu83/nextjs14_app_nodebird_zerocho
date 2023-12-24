import React, { useState } from "react"
import styles from "./page.module.css"
import LoginModal from "../../../../_component/modal/LoginModal"

interface IProps {}

function LoginModal_(props: IProps) {
  return (
    <LoginModal>
      <p>인터셉터 라우터 : (.)i/flow/login</p>
    </LoginModal>
  )
}

export default LoginModal_
