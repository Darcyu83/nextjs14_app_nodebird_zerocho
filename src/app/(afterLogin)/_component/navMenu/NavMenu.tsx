"use client"
import Link from "next/link"
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation"
import React, { useMemo } from "react"

import styles from "./navMenu.module.css"
import { dummy_user } from "../../../../dummy/dummyData"

interface IProps {}

const menus = {
  home: { title: "홈", path: "/home" },
  explore: { title: "탐색하기", path: "/explore" },
  messages: { title: "쪽지", path: "/messages" },
  profile: { title: "프로필", path: "/profile" },
}

function NavMenu(props: IProps) {
  const segment = useSelectedLayoutSegment()
  const segments = useSelectedLayoutSegments()

  const menuItms = useMemo(() => {
    const mutated = {
      ...menus,
      profile: {
        ...menus.profile,
        path: `/${dummy_user.id}/status/1`,
      },
    }

    const mapItems = Object.keys(mutated).map((key) => {
      return mutated[key as keyof typeof menus]
    })

    return mapItems
  }, [])

  // console.log("nav menu ==== ", segment)
  // console.log("nav menu ==== ", segments)
  return (
    <div className={styles.container}>
      {menuItms.map((menu) => (
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
