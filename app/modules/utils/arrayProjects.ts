import LenguajesIcons from "./arrayLenguajes";

const ArrayProjects = () => {

  const { project1,project2,project3} = LenguajesIcons()

    const dataProjects = [
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
        links:"application-39609135-ed42-4ec7-9218-d5fc72de6fb5.apk",
        title: 'Calculadora App',
        hover:'hover:text-gray-400',
      },
      {
        bg:"bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
        img:"/assets/pomodoro.png",
        inpiret:'',
        svg:project3,
        links:"application-699e4a11-be6a-421e-b51b-35c5744ad744.apk",
        title:'Pomodoro App',
        hover:'hover:text-blue-300',
      },
        
    ]
  return {
    dataProjects
  }
  
}
export default ArrayProjects;