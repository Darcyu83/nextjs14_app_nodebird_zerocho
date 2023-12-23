import React, { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

function HomeLayout({ children }: IProps) {
  return (
    <div style={{}}>
      <div>HomeLayout</div>
      {children}
    </div>
  )
}

export default HomeLayout
