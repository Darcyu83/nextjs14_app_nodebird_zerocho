"use client"
import React from "react"
import TrendCard from "./TrendCard"
import styles from "./trendSection.module.css"
import { usePathname } from "next/navigation"
interface IProps {}

function TrendSection(props: IProps) {
  const path = usePathname()

  // console.log("usePathname", path)

  return (
    <div
      className={styles.container}
      style={{ marginTop: path === "/search" ? 10 : 90 }}
    >
      {path !== "/explore" && (
        <>
          <h3>나를 위한 트렌드</h3>

          {[...Array(5)].map((_, idx) => (
            <TrendCard key={idx} />
          ))}
        </>
      )}
    </div>
  )
}

export default TrendSection
