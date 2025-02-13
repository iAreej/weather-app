
import React, { useEffect } from "react"
export default function App() {
  const[city,setcity]=React.useState("Islamabad");
  const[search,updatesearch]=React.useState("Islamabad");
  let a='';
useEffect(()=>{
  const fetchApi=async()=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?
    q=${search}&units=metric&appid=57c4f002db324060923f1caa30d24cbf`;
    const response=await fetch(url);
    const reJson=await response.json();
    a=reJson;
    console.log(a);
    setcity(reJson.main)
  }
 fetchApi();
},[search])
console.log("the city is"+ city);

  return (
    <div className="Maindiv">
    
      <div className='holder'>
      <h1>WEATHER-APP</h1>
      <input 
      id="input"
      type='search'
      defaultValue={search}
      onChange={(event)=>{
          updatesearch(event.target.value);
      }}
      />
    
       {!city?(<p>NO DATA FOUND</p>):(
              <div>
            
              <h1 className="location">
                <i className="fa-solid fa-location-dot"></i>{search}
                </h1>

              <h2 className="temp">{city.temp}°C (Feels like:{city.feels_like}) </h2>
              <h3>Pressure:{city.pressure}</h3>
              <h3 className="avg">
                Max-Temperature:{city.temp_max}°C|Min-Temperature:{city.temp_min}°C
                </h3>
                <span>Humidity:{city.humidity}</span>
                {city.sea_level && <span> /sea level:{city.sea_level}</span>}
                {city.grnd_level && <span> /Ground level:{city.grnd_level} </span>}

                <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
              </div>

       )}
          
          

        </div>
    </div>
  );
}


