import React, { useState } from "react"
import styles from "./post.module.css"
import Image from "next/image"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import ko from "dayjs/locale/ko"
import PostActionButtons from "./PostActionButtons"
dayjs.extend(relativeTime)
dayjs.locale(ko)

interface IProps {}

function Post(props: IProps) {
  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <div className={styles.first_line}>
            <h3>리트윗 타겟 @ 리트윗한 사람</h3>
            <p>•</p>
            <h3>{dayjs("2023-12-01").fromNow()}</h3>
          </div>
          <h3>게시글 내용</h3>
        </div>
      </div>
      <div className={styles.img_containter}>
        <Image
          src={"/yRsRRjGO.jpg"}
          alt="게시글 사진"
          fill
          //   layout="fill"
          //   placeholder="blur"
          //   blurDataURL="/photo.png"
          objectFit="contain"
        />
      </div>

      <PostActionButtons />
    </article>
  )
}

export default Post
