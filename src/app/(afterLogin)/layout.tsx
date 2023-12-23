import React, { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

function AfterLoginLayout({ children }: IProps) {
  return (
    <div style={{}}>
      <h1>AfterLoginLayout</h1>
      {children}
    </div>
  )
}

export default AfterLoginLayout
