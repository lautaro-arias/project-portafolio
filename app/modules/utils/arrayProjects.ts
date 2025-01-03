import LenguajesIcons from "./arrayLenguajes";

const ArrayProjects = () => {
  const { project1, project2, project3,project4 } = LenguajesIcons();

  const dataProjects = [
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/MGqMWLvw/web-pedidos.webp",
      svg: project2,
      inpiret: "",
      links: "https://web-1-muestra.netlify.app/",
      title: "Web de pedidos online",
      id:0o1,
      hover: "hover:text-orange-400",
    },
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/vmNn2D6s/195shots-so.png",
      svg: project4,
      inpiret: "",
      links: "https://webdemuestra2.netlify.app",
      title: "Web de ecommerce",
      id:0o2,
      hover: "hover:text-sky-900",
    },
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/B6wXBQNZ/movistar.png",
      inpiret: "https://tiendaonline.movistar.com.ar/",
      svg: project2,
      links: "https://incredible-pastelito-683baa.netlify.app",
      title: "Movistar",
      id:0o3,
      hover: "hover:text-sky-500",
    },
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/2651WBQX/netfli1-2.png",
      inpiret: "",
      svg: project1,
      links: "https://celebrated-yeot-bb3613.netlify.app",
      title: "Netflix clone",
      id:0o4,
      hover: "hover:text-red-600",
    },
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/BbrbRYdd/calculadora.png",
      inpiret: "",
      svg: project3,
      links: "application-39609135-ed42-4ec7-9218-d5fc72de6fb5.apk",
      title: "Calculadora App",
      id:0o5,
      hover: "hover:text-gray-400",
    },
    {
      bg: "bg-[url('/assets/bgTrailer.jpg')] bg-cover  bg-no-repeat bg-start",
      img: "https://i.postimg.cc/3w1yWZvv/pomodoro.webp",
      inpiret: "",
      svg: project3,
      links: "application-699e4a11-be6a-421e-b51b-35c5744ad744.apk",
      title: "Pomodoro App",
      id:0o6,
      hover: "hover:text-blue-300",
    },
  ];
  return {
    dataProjects,
  };
};
export default ArrayProjects;
