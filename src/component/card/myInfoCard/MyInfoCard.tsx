"use client"
import zLogo from "../../../../public/favicon.png"
import { dummy_user } from "../../../dummy/dummyData"
import Avatar from "../../avatar/Avatar"
import styles from "./myInfoCard.module.css"
interface IProps {}

function MyInfoCard(props: IProps) {
  return (
    <div className={styles.container} onClick={() => {}}>
      <Avatar imgUrl={zLogo} />
      <div>
        <h2 className={styles.name}>{dummy_user.nickname}</h2>
        <p className={styles.userId}>@{dummy_user.id}</p>
      </div>
    </div>
  )
}

export default MyInfoCard
