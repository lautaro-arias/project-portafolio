import LenguajesIcons from "./arrayLenguajes"

const ArrayProjects = () => {

  const { project1,link1,project2,link2,project3,link3 } = LenguajesIcons()

    const dataProjects = [
        {
            bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
            img:"/assets/develap.png",
            img2:"/assets/develap-cels.png",
            svg:project1,
            links:"https://celebrated-yeot-bb3613.netlify.app",
            title: 'Develap',
            hover:'hover:text-teal-300',
        },
        {
          bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
          img:"/assets/netfli1-2.png",
          img2:"/assets/netfli-cel.png",
          svg:project1,
          links:"https://celebrated-yeot-bb3613.netlify.app",
          title: 'Netflix clone',
          hover:'hover:text-red-600',

      },
        {
          bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
          img:"/assets/ecommerce.png",
          img2:"/assets/ecommerce-cel.png",
          svg:project2,
          links:"https://celebrated-yeot-bb3613.netlify.app",
          title: 'Ecommerce',
          hover:'hover:text-orange-400',

      },
      {
        bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
        img:"/assets/calculadora.png",
        svg:project3,
        links:"https://inspiring-elf-470468.netlify.app",
        title: 'Calculadora',
        hover:'hover:text-gray-400',
      },
      {
        bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
        img:"/assets/pomodoro.png",
        svg:project3,
        links:"https://inspiring-elf-470468.netlify.app",
        title:'Pomodoro',
        hover:'hover:text-blue-300',
      },
        
    ]

    /*{
            bg:"hover:bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-center",
            img:"/assets/proyect1.png",
            title: 'Proyectos 1',
            description:"La plataforma de comercio electrónico es un sitio web integral que ofrece una amplia gama de productos para satisfacer las necesidades de los clientes en diversas categorías. Con una interfaz intuitiva y fácil de navegar, los usuarios pueden explorar y comprar productos con facilidad. Desde moda y electrónica hasta hogar y estilo de vida, el sitio ofrece una experiencia de compra segura y conveniente. Además, cuenta con funciones avanzadas como recomendaciones personalizadas, opciones de pago seguras y seguimiento de pedidos en tiempo real. Con una atención al cliente excepcional, el ecommerce se esfuerza por brindar una experiencia de compra inigualable para cada usuario.",
            tecnologias :"tecnologias"
        },*/
  return {
    dataProjects
  }
  
}

export default ArrayProjects