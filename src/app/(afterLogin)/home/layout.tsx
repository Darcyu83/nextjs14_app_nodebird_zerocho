import React, { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

function HomeLayout({ children }: IProps) {
  return (
    <div>
      <h1 className="layout_nm">HomeLayout</h1>
      {children}
    </div>
  )
}

export default HomeLayout
