"use client"
import React, { ReactNode, useState } from "react"
import styles from "./modal.module.css"
import { RedirectType, redirect, useRouter } from "next/navigation"

interface IProps {
  children?: ReactNode
}

function LoginModal({ children }: IProps) {
  const router = useRouter()
  const [userId, setUserId] = useState("")
  const [pwd, setPwd] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = () => {}

  const onClickClose = () => {
    router.back()
  }
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangeId eee ", e.target.value)
    setUserId(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangePassword eee ", e.target.value)
    setPwd(e.target.value)
  }

  return (
    <div className={styles.modal_bg_layer}>
      {children}
      <div className={styles.container}>
        <div className={[styles.modal_header].join(" ")}>
          <h1>로그인</h1>
          <button type="button" onClick={onClickClose}>
            닫기
          </button>
        </div>
        <div className={styles.modal_contents}>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="userId">
              아이디
            </label>
            <input
              className={styles.input}
              id="userId"
              onChange={onChangeId}
              value={userId}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password">
              비밀번호
            </label>
            <input
              className={styles.input}
              id="password"
              onChange={onChangePassword}
              value={pwd}
            />
          </div>

          <div className={styles.msg}>{message}</div>
        </div>
        <div className={styles.modal_footer}>
          <button
            disabled={!userId || !userId}
            className={[styles.btn, "blue_btn"].join(" ")}
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
