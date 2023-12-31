"use client"
import React, { ReactNode, createContext, useState } from "react"

interface IProps {
  children: ReactNode
}

interface ITabContextProps {
  tab: "rec" | "fol"
  onChangeTab: (tabNm: "rec" | "fol") => void
}
export const TabContext = createContext<ITabContextProps | null>(null)

function TabContextProvider({ children }: IProps) {
  const [tab, setTab] = useState<"rec" | "fol">("rec")

  const onChangeTab = (tabNm: "rec" | "fol") => {
    setTab(tabNm)
  }

  return (
    <TabContext.Provider value={{ tab, onChangeTab }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider
