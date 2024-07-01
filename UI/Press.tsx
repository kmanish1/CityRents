function Pressicon({ img }: { img: string}){
    return(
        <img src={img} width={100}></img>
    )
}

export default function Press(){
    const data = [
        { img: "/news/newsimage1.jpeg" },
        { img: "/news/newsimage2.jpeg" },
        { img: "/news/newsimage3.jpeg" },
        { img: "/news/newsimage4.jpeg" },
        { img: "/news/newsimage5.jpeg" },
        { img: "/news/newsimage6.jpeg" },
      ];
    return(
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white py-6 mt-10">
            <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 mb-4">
                CityRents in the Press
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center text-center justify-center align-middle">
                {data.map((item) => (
                <div className="mx-auto">
                    <Pressicon img={item.img} />
                </div>
                ))}
            </div>
        </div>
    )
}