import Link from "next/link"
import React from "react"

interface IProps {}

function NotFound(props: IProps) {
  return (
    <div style={{}}>
      <h1>페이지가 존재하지 않습니다. 다른 페이지를 검색해 보세요.</h1>
      <Link href={"/search"}>검색</Link>
    </div>
  )
}

export default NotFound
