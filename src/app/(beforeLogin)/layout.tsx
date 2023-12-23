import React, { ReactNode } from "react"
import styles from "@/app/page.module.css"
interface IProps {
  children: ReactNode
  modal: ReactNode
}

/**
 * Parellel Router
 * Layout 파일에 보여줄 백그라운드 메인 페이지와 보여줄 모달을 설정
 * localhost:3000일 때 children -> page.tsx, modal->@modal/default.tsx(null)
 * localhost:3000/i/flow/login일 때
 * children -> i/flow/login/page.tsx
 * modal -> @modal/i/flow/login/page.tsx
 */
function ParellelRouterLayout({ children, modal }: IProps) {
  return (
    <div className={styles.container}>
      <h1 className="layout_nm">beforeLogin / Parellel router layout</h1>
      {children}
      {modal}
    </div>
  )
}

export default ParellelRouterLayout
