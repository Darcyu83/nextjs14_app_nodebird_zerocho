import React from "react"
import styles from "./trendSection.module.css"
import { useRouter } from "next/navigation"
import Link from "next/link"
interface IProps {}

function TrendCard(props: IProps) {
  return (
    <Link href={"/search?name=원초"} className={styles.card}>
      <h3>실시간트렌드</h3>
      <h3>유저명</h3>
      <h3>1,290 posts</h3>
    </Link>
  )
}

export default TrendCard
