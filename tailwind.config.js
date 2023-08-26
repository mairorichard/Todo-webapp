/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightblue: "#3a7bfd",
        darkgrayblue: "#777a92",
        darkgrayblue2: "	#25273c",
        verydarkgrayblue: "#161722",
        verylightgray: "#fafafa",
        lightbg: "#e4e5f1",
        lightdarkgrayblue: "#9394a5",
      },
    },
  },
  plugins: [],
};
