import { ComponentProps } from "react"

export enum Actions {
    TOOGLE_MENUBAR = 'toogle-menubar',
    SET_USER = 'set-user',
    LOGOUT_USER = 'logout-user',
    UPDATE_USER = 'update-user',
}
export type usertype = {
    uid: string
    displayName: string | null
    email: string | null
    photoURL: string | null
    role: "admin" | "user"
}
export type linkType = {
    name: string,
    Icon: (props: ComponentProps<"svg">) => JSX.Element,
    to: string
}