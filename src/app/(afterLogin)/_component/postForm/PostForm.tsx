"use client"

import React, {
  ChangeEventHandler,
  EventHandler,
  FormEventHandler,
  useRef,
  useState,
} from "react"
import styles from "./postForm.module.css"
import Image from "next/image"
interface IProps {}

function PostForm(props: IProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [content, setContent] = useState("")

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value)
  }
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault()
  }

  const onClickPhotoIcon = () => {
    fileInputRef.current?.click()
  }
  return (
    <form className={styles.postForm} onSubmit={onSubmit}>
      <div className={styles.avatar}></div>

      <div className={styles.inputs_container}>
        <textarea
          value={content}
          onChange={onChangeContent}
          placeholder="무슨일이 일어나고 있나요?"
          rows={5}
        />
        <div className={styles.buttons_container}>
          <input ref={fileInputRef} type="file" multiple hidden />

          <div className={styles.photo_attatchment} onClick={onClickPhotoIcon}>
            <Image
              width={25}
              height={25}
              src={"/photo.png"}
              alt="첨부사진 아이콘"
            />
          </div>
          <button className="blue_btn">게시하기</button>
        </div>
      </div>
    </form>
  )
}

export default PostForm
