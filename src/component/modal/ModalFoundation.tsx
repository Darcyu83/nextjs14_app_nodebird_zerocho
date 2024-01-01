"use client"
import React, { MouseEventHandler, ReactNode } from "react"
import styles from "./modal.module.css"
import { useRouter } from "next/navigation"
interface IProps {
  children?: ReactNode
}

function ModalBg({ children }: IProps) {
  const router = useRouter()

  const onClose: MouseEventHandler<HTMLDivElement> = (e) => {
    router.back()
  }

  return (
    <div className={styles.modal_bg_layer} onClick={onClose}>
      {/* 클릭 이벤트 bubble 방지 */}
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalBg
