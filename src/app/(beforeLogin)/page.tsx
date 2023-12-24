import Image from "next/image"
import styles from "@/app/page.module.css"
import Link from "next/link"
import zLogo from "../../../public/zlogo.png"

/**
 *
 * <Link/> 태그로 /login 이동 후 redirect(/i/flow/login) 할 시
 * 의도한 화면(백그라운드 홈 페이지 + 모달 창)과 다르게 뜨는 이유 : 서버사이드 렌더링
 *
 * 해결안 : 'use client' 클라이언트 사이드 렌더링으로 바꿔주고
 * redirect(서버 용)를 router를 사용 = useRouter ("nest/navigation")
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>

      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link
          href="/i/flow/signup"
          className={[styles.signup, "blue_btn"].join(" ")}
        >
          계정만들기
        </Link>
        <Link
          // href="/i/flow/login"
          href="/login"
          className={[styles.login, "white_btn"].join(" ")}
        >
          로그인하기
        </Link>
      </div>
    </>
  )
}
