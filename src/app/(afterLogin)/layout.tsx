import React, { ReactNode } from "react"
import styles from "./layout.module.css"
import Link from "next/link"
import Image from "next/image"

import zLogo from "../../../public/zlogo.png"
import NavMenu from "./_component/NavMenu"
interface IProps {
  children: ReactNode
}

function AfterLoginLayout({ children }: IProps) {
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
            {/* 폼 :: 검색 */}

            <form className={styles.search}>
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AfterLoginLayout
