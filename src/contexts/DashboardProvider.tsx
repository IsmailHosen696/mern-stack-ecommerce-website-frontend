import { createContext, Dispatch, useContext, useReducer } from "react";
import { Actions, usertype } from "../types";

export type DashboardContextStateType = {
    isMenubarOpen: boolean,
    user: usertype | null
}

export const DashboardContext = createContext<{
    state: DashboardContextStateType,
    dispatch: Dispatch<DashboardContextActionType>
} | null>(null);

type ToogleMenuBarOpen = {
    type: Actions.TOOGLE_MENUBAR
}

type SETUSER = {
    type: Actions.SET_USER
    user: usertype
}

type UPDATEUSER = {
    type: Actions.UPDATE_USER
    user: usertype
}

type LOGOUTUSER = {
    type: Actions.LOGOUT_USER
    user: null
}

type DashboardContextActionType = ToogleMenuBarOpen
    | SETUSER
    | LOGOUTUSER
    | UPDATEUSER

export const reducer = (
    state: DashboardContextStateType,
    action: DashboardContextActionType
): DashboardContextStateType => {
    switch (action.type) {
        case Actions.TOOGLE_MENUBAR:
            return { ...state, isMenubarOpen: !state.isMenubarOpen };
        case Actions.SET_USER:
            return { ...state, user: action.user };
        case Actions.UPDATE_USER:
            return { ...state, user: action.user };
        case Actions.LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
}

export default function DashboardProvider({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, {
        isMenubarOpen: false,
        user: null
    } as DashboardContextStateType);

    return (
        <DashboardContext.Provider value={{ state, dispatch }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error("Context not working!");
    }
    return context;
};