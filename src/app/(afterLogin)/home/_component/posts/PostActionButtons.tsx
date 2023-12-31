"use client"
import React, { useState } from "react"
import styles from "./post.module.css"

interface IProps {}

function PostActionButtons(props: IProps) {
  const [tog, setTog] = useState(false)
  return (
    <div style={{}}>
      <div
        className={tog ? styles.red : styles.blue}
        onClick={() => {
          setTog((curr) => !curr)
        }}
      >
        토글
      </div>
    </div>
  )
}

export default PostActionButtons
