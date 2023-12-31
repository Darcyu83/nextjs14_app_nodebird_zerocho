import TabContextProvider from "../../../context/TabContextProvider"
import PostForm from "../_component/postForm/PostForm"
import Post from "./_component/posts/Post"
import Tabs from "./_component/tabs/Tabs"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <TabContextProvider>
        <Tabs />
        <PostForm />

        {[...Array(10)].map((_, idx) => (
          <Post key={idx} />
        ))}
      </TabContextProvider>
    </main>
  )
}
