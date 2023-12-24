import React, { useState } from "react"
import SignUpModal from "../../../../_component/modal/SignUpModal"

interface IProps {}

function SignUpModal_(props: IProps) {
  return (
    <SignUpModal>
      <p>인터셉터 라우터 : @modal (.)i/flow/signup</p>
    </SignUpModal>
  )
}

export default SignUpModal_
