"use client"
import React, { ChangeEventHandler, ReactNode, useState } from "react"
import styles from "./modal.module.css"
import { useRouter } from "next/navigation"

interface IProps {
  children?: ReactNode
}

function SignUpModal({ children }: IProps) {
  const [userId, setUserId] = useState("")
  const [pwd, setPwd] = useState("")
  const [nickNm, setNickNm] = useState("")
  const [img, setImg] = useState("")
  const [imgFile, setImgFile] = useState<File>()

  const router = useRouter()

  const onSubmit = () => {}

  const onClickClose = () => {
    router.back()

    // TODO: 뒤로가기 랜딩 페이지가 /home이 아니면 /home로 보내기
  }

  const onChangeUserId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserId(e.target.value)
  }
  const onChangePwd: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPwd(e.target.value)
  }
  const onChangeNickNm: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickNm(e.target.value)
  }
  const onChangeImg: ChangeEventHandler<HTMLInputElement> = (e) => {
    setImg(e.target.value)
  }
  const onChangeImgFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImgFile(e.target.files[0])
  }
  return (
    <div className={styles.modal_bg_layer}>
      {children}
      <div className={styles.container}>
        <div className={[styles.modal_header].join(" ")}>
          <h1>회원가입</h1>
          <button type="button" onClick={onClickClose}>
            닫기
          </button>
        </div>
        <form className={styles.modal_contents}>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="userId">
              아이디
            </label>
            <input
              className={styles.input}
              id="userId"
              //   onChange={onChangeId}
              //   value={id}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password">
              비밀번호
            </label>
            <input
              className={styles.input}
              id="pwd"
              //   onChange={onChangePassword}
              //   value={[password]}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password">
              닉네임
            </label>
            <input
              className={styles.input}
              id="nickNm"
              //   onChange={onChangePassword}
              //   value={[password]}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password">
              프로필
            </label>
            <input
              type="file"
              className={styles.input}
              id="nickNm"
              //   onChange={onChangePassword}
              //   value={[password]}
            />
          </div>

          {/* <div className={styles.msg}>{message}</div> */}
        </form>

        <div className={styles.modal_footer}>
          <button
            // disabled={!id || !password}
            className={[styles.btn, "blue_btn"].join(" ")}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal
