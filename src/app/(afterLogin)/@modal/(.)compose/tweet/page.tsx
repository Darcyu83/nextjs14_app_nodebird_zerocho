"use client"

import React from "react"
import styles from "./tweetModal.module.css"
import ModalBg from "../../../../../component/modal/ModalFoundation"
import Avatar from "../../../../../component/avatar/Avatar"
import PostForm from "../../../_component/postForm/PostForm"
import { useRouter } from "next/navigation"

interface IProps {}

function TweetModal(props: IProps) {
  const router = useRouter()
  const onClose = () => {
    router.back()
  }

  return (
    <ModalBg>
      <div className={styles.container}>
        {/* 헤더:  닫기버튼 */}

        <div className={styles.header}>
          <p onClick={onClose}>닫기</p>
        </div>

        <PostForm isModalUsage />
      </div>
    </ModalBg>
  )
}

export default TweetModal
