import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import styles from "./avatar.module.css"

interface IProps {
  imgUrl: string | StaticImport
}

function Avatar({ imgUrl }: IProps) {
  return (
    <div className={styles.avatar}>
      <Image className={styles.img} src={imgUrl} alt="" />
    </div>
  )
}

export default Avatar
