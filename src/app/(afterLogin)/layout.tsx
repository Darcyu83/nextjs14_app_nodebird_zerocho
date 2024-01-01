import React, { ReactNode } from "react"
import styles from "./layout.module.css"

import Image from "next/image"

import zLogo from "../../../public/zlogo.png"
import NavMenu from "./_component/navMenu/NavMenu"
import TrendSection from "./_component/trendSection/TrendSection"
import FollowRecommend from "./_component/followRecommend/FollowRecommend"
import Link from "next/link"
import FixedSrchBar from "./_component/fixedSrchBar/FixedSrchBar"
interface IProps {
  children: ReactNode
  modal: ReactNode
}

function AfterLoginLayout({ children, modal }: IProps) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <h1 className="layout_nm">AfterLoginLayout</h1>

        {/* left aside */}
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link href={"/home"} className={styles.logo}>
              <div className={styles.logo_container}>
                <Image src={zLogo} alt="z로고" width={46} height={46} />
              </div>
            </Link>

            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href={"/compose/tweet"} className="blue_btn">
                게시하기
              </Link>
            </nav>
          </div>
        </section>
      </header>

      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          {/* 메인 컨텐트 */}
          <main className={styles.main}>{children}</main>
          {/* 우측 aside */}
          <section className={styles.rightSection}>
            <FixedSrchBar />

            <TrendSection />
            <FollowRecommend />
          </section>
        </div>
      </div>
      {modal}
    </div>
  )
}

export default AfterLoginLayout
