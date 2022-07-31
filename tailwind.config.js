module.exports = {
  mode:'jit',
  darkMode:'class' ,
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      container:{
        center:true ,
        padding:"1rem",
      },
      colors:{
        bg:{
          DEFAULT:"#f8f9ff" ,
          card:'#f1f3fa' ,
          
        } ,
        darkbg:{
          DEFAULT:"#20222f",
          card:"#252b43",
          dark:"#1d2029"
        }
      } ,
      
    },
  },
  plugins: [],
}
