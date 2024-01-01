import { useContext } from "react"
import { TabContext } from "./TabContextProvider"

export const useTabContext = () => {
  const tabContext = useContext(TabContext)

  return tabContext
}
