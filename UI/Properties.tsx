

const products = [
    {
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    },{
      id: 1,
      name: "Gachibowli",
      href: '#',
      imageSrc: '/suggestion house.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35000/-",
      color: "Charming 3-bedroom, 2-bathroom house with a spacious open-concept living area",
    }
  ]
  
  export default function Properties() {
    return (
      <div className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Available Properties</h2>
    
          <div className="mt-6 overflow-x-auto scrollbar-hide">
            <div className="inline-flex space-x-4 pb-4">
              {products.map((product) => (
                <div key={product.id} className="group relative w-64 flex-shrink-0 bg-white">
                  <div className="w-full rounded-md bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

