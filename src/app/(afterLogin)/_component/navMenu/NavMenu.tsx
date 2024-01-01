"use client"
import Link from "next/link"
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation"
import React from "react"

import styles from "./navMenu.module.css"

interface IProps {}

const menus = [
  { title: "홈", path: "/home" },
  { title: "탐색", path: "/explore" },
  { title: "게시글 작성", path: "/compose" },
  { title: "메시지", path: "/messages" },
  { title: "검색", path: "/search" },
]

function NavMenu(props: IProps) {
  const segment = useSelectedLayoutSegment()
  const segments = useSelectedLayoutSegments()

  // console.log("nav menu ==== ", segment)
  // console.log("nav menu ==== ", segments)
  return (
    <div className={styles.container}>
      {menus.map((menu) => (
        <Link
          key={menu.path}
          href={menu.path}
          style={{ color: menu.path === segment ? "dodgerblue" : "inherit" }}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  )
}

export default NavMenu
