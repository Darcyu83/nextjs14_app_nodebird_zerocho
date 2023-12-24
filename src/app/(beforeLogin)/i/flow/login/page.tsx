import React, { useState } from "react"
import styles from "./page.module.css"
import LoginModal from "../../../_component/modal/LoginModal"

interface IProps {}

/**
 * <Link/>를 통해서 /i/flow/login 경로로 접근하면
 * (.)i/flow/login 인터셉터 라우터가 작동해서 -> @modal/i/flow/login 폴더안에 내용이 그려진다.
 *
 * url 직접 입력 접근 시 본 파일 실행됨.
 *
 * @param props
 * @returns
 */
function LoginModal_(props: IProps) {
  return <LoginModal />
}

export default LoginModal_
