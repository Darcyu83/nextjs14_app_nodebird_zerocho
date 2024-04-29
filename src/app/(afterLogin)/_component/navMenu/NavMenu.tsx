"use client"
import Link from "next/link"
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation"
import { useMemo } from "react"

import { dummy_user } from "../../../../dummy/dummyData"
import styles from "./navMenu.module.css"

interface IProps {}

const menus = {
  home: { title: "홈", path: "/home" },
  explore: { title: "탐색하기", path: "/explore" },
  messages: { title: "쪽지", path: "/messages" },
  // search: { title: "검색", path: "/search" },
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

    return mutated
  }, [])

  // console.log("nav menu ==== ", segments)
  return (
    <div className={styles.container}>
      {Object.keys(menuItms).map((key) => {
        const menu = menuItms[key as keyof typeof menuItms]
        return (
          <Link
            key={menu.path}
            href={menu.path}
            className={styles.nav_btn}
            style={
              menu.path === `/${segment}`
                ? {
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            {menu.title}
          </Link>
        )
      })}
    </div>
  )
}

export default NavMenu
