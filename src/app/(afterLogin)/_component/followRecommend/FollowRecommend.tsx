import React from "react"
import styles from "./followRecommend.module.css"
import FollowRecommendCard from "./FollowRecommendCard"

interface IProps {}

function FollowRecommend(props: IProps) {
  return (
    <div className={styles.container}>
      <h3>팔로우 추천</h3>

      {[...Array(3)].map((_, idx) => (
        <FollowRecommendCard key={idx} />
      ))}
    </div>
  )
}

export default FollowRecommend
