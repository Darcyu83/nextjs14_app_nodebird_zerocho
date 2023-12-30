import React from "react"
import styles from "./followRecommend.module.css"
import { useRouter } from "next/navigation"
import Link from "next/link"
import FollowButton from "./FollowButton"
interface IProps {}

function FollowRecommendCard(props: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}></div>

      <div className={styles.info}>
        <h3>Elon Musk</h3>
        <h3>@아이디</h3>
      </div>

      <FollowButton />
    </div>
  )
}

export default FollowRecommendCard
