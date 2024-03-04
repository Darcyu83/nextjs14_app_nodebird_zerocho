import Link from "next/link"
import styles from "./trendSection.module.css"
interface IProps {
  index: number
}

function TrendCard({ index }: IProps) {
  return (
    <Link href={"/search?name=원초"} className={styles.card}>
      <h3>{index}실시간트렌드</h3>
      <h3>유저명</h3>
      <h3>1,290 posts</h3>
    </Link>
  )
}

export default TrendCard
