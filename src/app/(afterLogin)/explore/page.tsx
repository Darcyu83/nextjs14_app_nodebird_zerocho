import TrendSection from "../_component/trendSection/TrendSection"
import Tabs from "./_component/tabs/Tabs"
import styles from "./Explore.module.css"

interface IProps {
  searchParams: { q?: string; f?: string }
}
export default function Explore({ searchParams }: IProps) {
  console.log("searchParams ", searchParams)
  return (
    <main className={styles.container}>
      <Tabs />
    </main>
  )
}
