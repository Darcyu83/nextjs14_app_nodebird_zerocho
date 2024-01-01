import Divider from "../../../component/divider/Divider"
import SrchForm from "../_component/srchForm/SrchForm"
import styles from "./search.module.css"
export default function Search() {
  return (
    <main className={styles.main}>
      <SrchForm />
      <Divider />
    </main>
  )
}
