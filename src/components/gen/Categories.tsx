import { Link } from "react-router-dom"

export const catagories = [
    {
        name: "Laptop",
        imgSrc: "https://i.ibb.co/sP9PLDr/4439476.png"
    },
    {
        name: "Mobile",
        imgSrc: "https://i.ibb.co/bmRfK8T/4443113.png"
    },
    {
        name: "Mouce",
        imgSrc: "https://www.startech.com.bd/image/cache/catalog/category-thumb/accessories-48x48.png"
    },
    {
        name: "Keyboard",
        imgSrc: "https://i.ibb.co/rsY18cd/689392.png"
    },
    {
        name: "Headphone",
        imgSrc: "https://i.ibb.co/pzzGGSn/2353224.png"
    },
    {
        name: "Router",
        imgSrc: "https://i.ibb.co/93pXctx/2939476.png"
    }
]
export default function Categories() {
    return (
        <div className="flex flex-col gap-3 items-start">
            {
                catagories.map((item, i) =>
                    <Link to='#' key={i} className="setCursor hover:bg-green-500 transition-all duration-200 hover:text-white p-2 w-full items-center gap-3 flex">
                        <img src={item.imgSrc} alt="item_image" className="w-8 h-8" />
                        <span>{item.name}</span>
                    </Link>
                )
            }
        </div>
    )
}
