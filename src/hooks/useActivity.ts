import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"

export const useActivity = () => {
  const contex = useContext(ActivityContext)
  if (!contex) {
    throw new Error(
      "El hook useActivity debe ser utilizado en un ActivityProvider"
    )
  }
  return contex
}
