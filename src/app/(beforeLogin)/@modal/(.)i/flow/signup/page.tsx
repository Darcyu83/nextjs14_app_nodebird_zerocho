import React, { useState } from "react"
import styles from "./page.module.css"
import SignUpModal from "../../../../_component/SignUpModal"

interface IProps {}

function LoginModal_(props: IProps) {
  return (
    <SignUpModal>
      <p>인터셉터 라우터 : (.)i/flow/signup</p>
    </SignUpModal>
  )
}

export default LoginModal_
