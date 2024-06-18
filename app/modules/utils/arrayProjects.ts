import LenguajesIcons from "./arrayLenguajes";

const ArrayProjects = () => {

  const { project1,project2,project3} = LenguajesIcons()

    const dataProjects = [
       /* {/*
            bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
            img:"/assets/develap.png",
            svg:project1,
            inpiret:'',
            links:"https://celebrated-yeot-bb3613.netlify.app",
            title: 'Develap',
            hover:'hover:text-teal-300',
    }*/
        {
          bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
          img:"/assets/netfli1-2.png",
          inpiret:'',
          svg:project1,
          links:"https://celebrated-yeot-bb3613.netlify.app",
          title: 'Netflix clone',
          hover:'hover:text-red-600',

      },
        {
          bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
          img:"/assets/movistar.png",
          inpiret:'https://tiendaonline.movistar.com.ar/',
          svg:project2,
          links:"https://incredible-pastelito-683baa.netlify.app",
          title: 'Movistar',
          hover:'hover:text-sky-500',

      },
      {
        bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
        img:"/assets/calculadora.png",
        inpiret:'',

        svg:project3,
        links:"https://spectacular-banoffee-24f976.netlify.app",
        title: 'Calculadora',
        hover:'hover:text-gray-400',
      },
      {
        bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
        img:"/assets/pomodoro.png",
        inpiret:'',
        svg:project3,
        links:"https://effulgent-melomakarona-eee93d.netlify.app",
        title:'Pomodoro',
        hover:'hover:text-blue-300',
      },
        
    ]
  return {
    dataProjects
  }
  
}
export default ArrayProjects;