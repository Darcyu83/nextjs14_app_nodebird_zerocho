"use client"
import React, { useState } from "react"
import styles from "./fixedSrchBar.module.css"
import { usePathname } from "next/navigation"

interface IProps {}

function FixedSrchBar(props: IProps) {
  const pathname = usePathname()

  const [filter, setFilter] = useState({ allUser: false, meFollowing: false })

  const onChangeAllUserFilter = (bool: boolean) => {
    setFilter((curr) => ({ ...curr, allUser: bool }))
  }

  const onChangeMeFollowingFilter = (bool: boolean) => {
    setFilter((curr) => ({ ...curr, meFollowing: bool }))
  }
  if (pathname === "/search")
    return (
      <div className={[styles.container, styles.filter].join(" ")}>
        {/* 검색 필터 */}

        <h3>검색 필터</h3>

        {/* 필터 옵션 */}
        <h3>사용자</h3>

        <div className={styles.checkbox_container}>
          <label htmlFor="allUser">모든 사용자</label>
          <input
            id="allUser"
            type="checkbox"
            checked={filter.allUser}
            onChange={(e) => onChangeAllUserFilter(e.target.checked)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="meFollowing">내가 팔로우하는 사람들</label>
          <input
            id="meFollowing"
            type="checkbox"
            checked={filter.meFollowing}
            onChange={(e) => onChangeMeFollowingFilter(e.target.checked)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="allUser">모든 사용자</label>
          <input
            id="allUser"
            type="checkbox"
            checked={filter.allUser}
            onChange={(e) => onChangeAllUserFilter(e.target.checked)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="meFollowing">내가 팔로우하는 사람들</label>
          <input
            id="meFollowing"
            type="checkbox"
            checked={filter.meFollowing}
            onChange={(e) => onChangeMeFollowingFilter(e.target.checked)}
          />
        </div>
      </div>
    )

  return (
    <form className={[styles.container, styles.search].join(" ")}>
      {/* 폼 :: 검색 */}
      <input type="search" />
    </form>
  )
}

export default FixedSrchBar
