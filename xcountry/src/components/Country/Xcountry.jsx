import {useState, useEffect} from "react";
import styles from "./Xcountry.module.css"
const Xcountry = () => {
    const[flag, setFlag]= useState([])
    
    const handledata = async() => {
          
        try{
              const response = await fetch ('https://xcountries-backend.azurewebsites.net/all')
              const data = await response.json()
              console.log("data" ,data)
              setFlag(data)
              
        }
        catch(e){
            console.error("Error fetching data::", e.message)

        }

    }
    useEffect(()=>{
        handledata();
    },[])

    return (
        <div className={styles.container}>
            {
             flag.map((data)=>{
                // console.log('data id', data.abbr)
              return(
                <div className={styles.xcountry} key={data.abbr}> 
                  <img className={styles.imgSrc}  src={data.flag} alt={data.name}/>
                  <h4>{data.name}</h4>
                </div>
                  );
                })
             }
           </div>
     )
}

export default Xcountry