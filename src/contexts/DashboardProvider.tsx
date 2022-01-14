import { createContext, Dispatch, useContext, useReducer } from "react";
import { Actions } from "../types";

export type DashboardContextStateType = {
    isMenubarOpen: boolean,
    isSearchBarOpen: boolean
}

export const DashboardContext = createContext<{
    state: DashboardContextStateType,
    dispatch: Dispatch<DashboardContextActionType>
} | null>(null);

type ToogleMenuBarOpen = {
    type: Actions.TOOGLE_MENUBAR
}
type ToogleSearchBarOpen = {
    type: Actions.TOOGLE_SEARCHBAR
    value: boolean
}


type DashboardContextActionType = ToogleMenuBarOpen
    | ToogleSearchBarOpen

export const reducer = (
    state: DashboardContextStateType,
    action: DashboardContextActionType
): DashboardContextStateType => {
    switch (action.type) {
        case Actions.TOOGLE_MENUBAR:
            return { ...state, isMenubarOpen: !state.isMenubarOpen };
        case Actions.TOOGLE_SEARCHBAR:
            return { ...state, isSearchBarOpen: action.value };
        default:
            return state;
    }
}

export default function DashboardProvider({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, {
        isMenubarOpen: false,
        user: null,
        isSearchBarOpen: false
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
        throw new Error("problem on context");
    }
    return context;
};