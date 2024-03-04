import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import styles from "./avatar.module.css"

interface IProps {
  imgUrl?: string | StaticImport
}

function Avatar({ imgUrl }: IProps) {
  return (
    <div className={styles.avatar}>
      {imgUrl && (
        <Image
          className={styles.img}
          src={imgUrl}
          alt=""
          width={100}
          height={100}
        />
      )}
    </div>
  )
}

export default Avatar
