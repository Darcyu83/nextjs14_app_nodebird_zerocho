import dayjs from "dayjs"
import ko from "dayjs/locale/ko"
import relativeTime from "dayjs/plugin/relativeTime"
import Image from "next/image"
import Avatar from "../../../../../component/avatar/Avatar"
import PostActionButtons from "./PostActionButtons"
import styles from "./post.module.css"
dayjs.extend(relativeTime)
dayjs.locale(ko)

interface IProps {
  index: number
}

function Post({ index }: IProps) {
  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <Avatar imgUrl={`/images/cat_${(index + 1) % 4}.png`} />
        {/* <div className={styles.avatar}></div> */}
        <div className={styles.info}>
          <div className={styles.first_line}>
            <h3>리트윗 타겟 @ 리트윗한 사람</h3>
            <p>•</p>
            <h3>{dayjs("2023-12-01").fromNow()}</h3>
          </div>
          <h3>게시글 내용</h3>
        </div>
      </div>
      <div className={styles.img_containter}>
        <Image
          src={`/images/cat_${index % 4}.png`}
          alt="게시글 사진"
          fill
          //   layout="fill"
          //   placeholder="blur"
          //   blurDataURL="/photo.png"
          objectFit="contain"
        />
      </div>

      <PostActionButtons />
    </article>
  )
}

export default Post
