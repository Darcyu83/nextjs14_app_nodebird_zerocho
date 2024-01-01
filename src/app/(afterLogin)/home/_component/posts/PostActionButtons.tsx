"use client"
import React, { useState } from "react"
import styles from "./postActionBtns.module.css"

interface IProps {}

function PostActionButtons(props: IProps) {
  const [chatActive, setChatActive] = useState(false)
  const [repostActive, setRepostActive] = useState(false)
  const [likeActive, setLikeActive] = useState(false)

  return (
    <div className={styles.container}>
      <div
        className={chatActive ? styles.chat_active : undefined}
        onClick={() => {
          setChatActive((curr) => !curr)
        }}
      >
        채팅글
      </div>
      <div
        className={repostActive ? styles.repost_active : undefined}
        onClick={() => {
          setRepostActive((curr) => !curr)
        }}
      >
        리포스트
      </div>
      <div
        className={likeActive ? styles.like_active : undefined}
        onClick={() => {
          setLikeActive((curr) => !curr)
        }}
      >
        좋아요
      </div>
    </div>
  )
}

export default PostActionButtons
