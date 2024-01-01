import React from "react"
import styles from "./srchForm.module.css"
interface IProps {}

function SrchFormFloating(props: IProps) {
  return (
    <form className={[styles.container_has_padding, styles.search].join(" ")}>
      {/* 폼 :: 검색 */}
      <input type="search" />
    </form>
  )
}

export default SrchFormFloating
