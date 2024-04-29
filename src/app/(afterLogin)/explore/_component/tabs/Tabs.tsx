"use client"
import React, { useContext, useState } from "react"
import styles from "./tabs.module.css"
import { useTabContext } from "../../../../../context/useTabContext"
import { useRouter, useSearchParams } from "next/navigation"

interface IProps {}

function Tabs(props: IProps) {
  const router = useRouter()
  const tabContext = useTabContext()
  const searchParams = useSearchParams()

  return (
    <div className={styles.top_fixed}>
      <h2>탐색하기</h2>

      <div className={styles.tabs}>
        <div
          className={styles.tab}
          onClick={() => router.replace(`/search?q=${searchParams.get("q")}`)}
        >
          인기
          {tabContext?.tab === "rec" ? (
            <div className={styles.tab_indicator}></div>
          ) : undefined}
        </div>
        <div
          className={styles.tab}
          onClick={() =>
            router.replace(`/search?${searchParams.toString()}&f=live`)
          }
        >
          최신
          {tabContext?.tab === "fol" ? (
            <div className={styles.tab_indicator}></div>
          ) : undefined}
        </div>
      </div>
    </div>
  )
}

export default Tabs
