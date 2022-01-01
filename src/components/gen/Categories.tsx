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
        <div className="sm:grid w-full items-center justify-center sm:grid-cols-3 max-w-lg flex flex-wrap">
            {
                catagories.map((item, i) =>
                    <button key={i} className="flex p-5 rounded m-5 items-center group setCursor justify-center w-32 border border-gray-300 flex-col">
                        <img src={item.imgSrc} className="w-16 h-16" alt="image_item" />
                        <span className="font-medium pt-2 group-hover:text-blue-500 transition-all duration-200">{item.name}</span>
                    </button>
                )
            }
        </div>
    )
}
