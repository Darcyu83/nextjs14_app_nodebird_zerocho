import React from "react"
import TrendCard from "./TrendCard"
import styles from "./trendSection.module.css"
interface IProps {}

function TrendSection(props: IProps) {
  return (
    <div className={styles.container}>
      <h3>나를 위한 트렌드</h3>

      {[...Array(5)].map((_, idx) => (
        <TrendCard key={idx} />
      ))}
    </div>
  )
}

export default TrendSection
