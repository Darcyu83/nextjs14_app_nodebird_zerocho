"use client"
import React, { useState } from "react"
import styles from "./fixedSrchBar.module.css"
import { usePathname } from "next/navigation"
import SrchFormFloating from "../srchForm/SrchFormFloating"

interface IProps {}

function FixedSrchBar(props: IProps) {
  const pathname = usePathname()

  const [isMeFollowing, setIsMeFollowing] = useState(true)
  const [isMeFollowing2, setIsMeFollowing2] = useState(true)

  const onChangeUserRangeFilter = (bool: boolean) => {
    setIsMeFollowing(bool)
  }
  const onChangeUserRangeFilter2 = (bool: boolean) => {
    setIsMeFollowing2(bool)
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
            name="isMeFollowing"
            type="radio"
            checked={!isMeFollowing}
            onChange={(e) => onChangeUserRangeFilter(false)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="meFollowing">내가 팔로우하는 사람들</label>
          <input
            id="meFollowing"
            name="isMeFollowing"
            type="radio"
            checked={isMeFollowing}
            onChange={(e) => onChangeUserRangeFilter(true)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="allUser2">모든 사용자</label>
          <input
            id="allUser2"
            name="isMeFollowing2"
            type="radio"
            checked={!isMeFollowing2}
            onChange={(e) => onChangeUserRangeFilter2(false)}
          />
        </div>
        <div className={styles.checkbox_container}>
          <label htmlFor="meFollowing2">내가 팔로우하는 사람들</label>
          <input
            id="meFollowing2"
            name="isMeFollowing2"
            type="radio"
            checked={isMeFollowing2}
            onChange={(e) => onChangeUserRangeFilter2(true)}
          />
        </div>
      </div>
    )

  return <SrchFormFloating />
}

export default FixedSrchBar
