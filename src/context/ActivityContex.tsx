import { Children, ReactNode, createContext, useReducer } from "react";
import { activityReducer, initialState } from "../reducers/activity-reducer";
type ActivityProviderProps ={
children: ReactNode
}

export const ActivityContext = createContext()

export const ActivityProvider = ({children}:ActivityProviderProps) => {
    const [state,dispatch] = useReducer(activityReducer,initialState)
    return (
      <ActivityContext.Provider value={{
        state,dispatch
      }}>{children}</ActivityContext.Provider>
    );
}
