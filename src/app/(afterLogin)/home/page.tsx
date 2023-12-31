import TabContextProvider from "../../../context/TabContextProvider"
import PostForm from "../_component/postForm/PostForm"
import Tabs from "./_component/Tabs"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <TabContextProvider>
        <Tabs />
        <PostForm />
      </TabContextProvider>
    </main>
  )
}
