"use client"
import React, { useState } from "react"
import styles from "./page.module.css"

interface IProps {}

function LoginModal(props: IProps) {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = () => {}

  const onClickClose = (e: React.ChangeEvent<HTMLInputElement>) => {}
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangeId eee ", e.target.value)
    setId(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangePassword eee ", e.target.value)
    setPassword(e.target.value)
  }
  return (
    <div className={styles.modal_bg_layer}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <div className={styles.modal_contents}>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="userId">
              아이디
            </label>
            <input
              className={styles.input}
              id="userId"
              onChange={onChangeId}
              value={id}
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
              value={[password]}
            />
          </div>

          <div className={styles.msg}>{message}</div>
        </div>
        <div className={styles.modal_footer}>
          <button
            disabled={!id || !password}
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
