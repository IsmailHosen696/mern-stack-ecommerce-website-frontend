export enum Actions {
    TOOGLE_MENUBAR = 'toogle-menubar',
    SET_USER = 'set-user',
    REMOVE_USER = 'remove-user',
    UPDATE_USER = 'update-user',
}
export type usertype = {
    uid: string
    displayName: string
    email: string
    photoURL: string
    isEmailVerfied: boolean
    rool: "admin" | "user"
} | null