"use client"
import React, { useContext, useState } from "react"
import styles from "./tabs.module.css"
import { useTabContext } from "../../../../../context/useTabContext"

interface IProps {}

function Tabs(props: IProps) {
  const tabContext = useTabContext()
  return (
    <div className={styles.top_fixed}>
      <h2>홈</h2>

      <div className={styles.tabs}>
        <div
          className={styles.tab}
          onClick={() => tabContext?.onChangeTab("rec")}
        >
          추천
          {tabContext?.tab === "rec" ? (
            <div className={styles.tab_indicator}></div>
          ) : undefined}
        </div>
        <div
          className={styles.tab}
          onClick={() => tabContext?.onChangeTab("fol")}
        >
          팔로우 중
          {tabContext?.tab === "fol" ? (
            <div className={styles.tab_indicator}></div>
          ) : undefined}
        </div>
      </div>
    </div>
  )
}

export default Tabs
