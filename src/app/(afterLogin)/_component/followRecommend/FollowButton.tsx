"use client"
import { useRouter } from "next/navigation"
import React from "react"

interface IProps {}

function FollowButton(props: IProps) {
  const router = useRouter()
  return <button className="blue_btn">팔로우</button>
}

export default FollowButton
