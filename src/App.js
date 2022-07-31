import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import instagram from './images/icon-instagram.svg'
import youtube from './images/icon-youtube.svg'
import up from './images/icon-up.svg'
import down from './images/icon-down.svg'
import { useState } from 'react'
// import {AiFillFacebook} from 'react-icons/ai'
function App() {
  const [darkMode ,setDarkMode] = useState(false)

  const handleChange = (e)=>{
    setDarkMode(e.target.checked)
  }
  console.log(darkMode);
   return (
   <div className={darkMode && 'dark'}>
     <div className="text-slate-500 h-100vh dark:bg-darkbg" >
    <div className=" bg-gray-200 dark:bg-darkbg-card">
    <div className="dark:text-lime-50 container capitalize p-10 rounded-2xl flex justify-between items-center">
        <div className="title">
          <h2 className="dark:text-lime-50 text-slate-800 text-3xl" >social media dashboard</h2>
          <p>total followers : 23,004</p>
        </div>
        <div className="darkModes">
          <label className="mx-2" >dark mode</label>
          <input onChange={handleChange} type="checkbox"/>
        </div>
      </div>
    </div>
      <div className="container">
        {/* card */}
       <div className="cards mt-4 dark:bg-darkbg bg-bg grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6 ">
       <div className="card  before:bg-sky-500">
          <div className="flex gap-2 justify-center items-center pb-6 ">
          <img src={facebook} alt="" />
          <span>@nathanf</span>
          </div>
          <h3 className='text-6xl'>1987</h3>
          <p className='font-medium uppercase tracking-[0.3em]'>followers</p>
          <div className="flex gap-2 justify-center items-center pt-6">
          <img src={up} alt="" />
          <span>12 today</span>
          </div>
        </div>

        <div className="card  before:bg-blue-700">
          <div className="flex gap-2 justify-center items-center pb-6 ">
          <img src={twitter} alt="" />
          <span>@nathanf</span>
          </div>
          <h3 className='text-6xl'>1044</h3>
          <p className='font-medium uppercase tracking-[0.3em]'>followers</p>
          <div className="flex gap-2 justify-center items-center pt-6">
          <img src={up} alt="" />
          <span>99 today</span>
          </div>
        </div>

        <div className="card  before:bg-yellow-500">
          <div className="flex gap-2 justify-center items-center pb-6 ">
          <img src={instagram} alt="" />
          <span>@nathanf</span>
          </div>
          <h3 className='text-6xl'>11k</h3>
          <p className='font-medium uppercase tracking-[0.3em]'>followers</p>
          <div className="flex gap-2 justify-center items-center pt-6">
          <img src={up} alt="" />
          <span>1007today</span>
          </div>
        </div>

        <div className="card  before:bg-red-500">
          <div className="flex gap-2 justify-center items-center pb-6 ">
          <img src={youtube} alt="" />
          <span>@nathanf</span>
          </div>
          <h3 className='text-6xl'>8293</h3>
          <p className='font-medium uppercase tracking-[0.3em]'>followers</p>
          <div className="flex gap-2 justify-center items-center pt-6">
          <img src={down} alt="" />
          <span>144 today</span>
          </div>
        </div>
       </div>
      </div>

      <div className="container mt-10 dark:text-lime-100 ">
        <h3 className='text-3xl'>overview - today</h3>
        {/* main card */}
        <div className=" dark:bg-darkbg grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4">
          {Array(8).fill("").map((el) =>{
            return (
              <div className="card-sm">
                <div className="flex justify-between items-start ">
                  <h4>pages views</h4>
                  <img src={facebook} alt="" />
                </div>
                <div className="flex justify-between">
                  <h3>87545</h3>
                  <div className="flex gap-2 items-center">
                    <img src={down} alt="" />
                    <span>3%</span>
                  </div>
                </div>
          
              </div>
            )
          })}
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
