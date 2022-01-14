import Banner from "../../components/gen/Banner";
import Categories from "../../components/gen/Categories";

export default function Home() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center sm:px-5 max-w-screen-2xl">
                <Banner />
                <div className="py-5 w-full flex flex-col items-center">
                    <h1 className="text-2xl font-medium py-5 ">Categories</h1>
                    <Categories />
                </div>
                <div className="flex items-center flex-col">
                    <h1 className="text-2xl font-medium py-5 ">Featured Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat, porro quasi tempore ea at, omnis incidunt aperiam illum voluptatem dolore excepturi minus beatae natus itaque a, recusandae ad quas eius nemo sunt. Nihil, iste. Ad iure sequi aspernatur. Similique veniam deserunt pariatur quos amet praesentium cumque porro? Deserunt eius, tenetur beatae possimus ullam iusto labore illo! Omnis hic ab dignissimos eius odit, incidunt recusandae, iste, magnam velit totam neque perferendis! Eveniet facere ullam illo voluptas! Animi cupiditate, autem praesentium sint obcaecati nisi mollitia exercitationem consequuntur, quia ipsa quaerat repellendus, in laboriosam optio reprehenderit deleniti modi impedit adipisci? Obcaecati, delectus? 565656</p>
                </div>
            </div>
        </div>
    )
}
