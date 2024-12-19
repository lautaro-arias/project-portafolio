import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.css", 
    flowbite.content()
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    },
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bgHero':"url('/src/modules/assets/hero.jpg')",
        'bgTrailer':"url('/src/modules/assets/bgTrailer.jpg')",
        'bgProyect1':"url('/src/modules/assets/proyect1.png')",
        'bgYo':"url('/src/modules/assets/yo.png')",
      },
    },
    
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    flowbite.plugin()
  ],
};
export default config;
