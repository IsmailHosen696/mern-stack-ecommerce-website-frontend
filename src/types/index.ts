import { ComponentProps } from "react"

export enum Actions {
    TOOGLE_MENUBAR = 'toogle-menubar',
    TOOGLE_SEARCHBAR = 'toogle-searchbar',
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
    to: string
    Icon?: (props: ComponentProps<"svg">) => JSX.Element
}

export type itemType = {
    id: string,
    name: string;
    price: number;
    img: string;
    tags?: string[];
    avilableOnStock: number;
    inStock: boolean;
    category: string;
    type?: string;
}