import React, {useState} from 'react'
import  classes from"../style/Home.module.css"
import Button from '../js/Button'


function Home() {

    const [res, setRes] = useState("")

    const  buttons = ["C","0","/","1","2","3","*","4","5","6","+","7","8","9","-",".","DEL","="];

    const findval = ()=> {

        let result = Function("return "+res)();
        setRes(result.toString());
    }

    const handler = (arg) => {

        if(arg === "C") setRes("");
        else if(arg === "=") findval();
        else if(arg === "DEL"){
            let n = res.length;
            if(n>0)
            setRes(res.slice(0,n-1));
        }
            else        
            setRes(res.concat(arg))
    }

  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}>
                    {res}
                </div>
            </div>
            <div className={classes.btns}>
                {buttons.map((ele,index)=> {return <Button handler={handler} value ={ele} key={index}/>})}
            </div>
        </div>
    </div>
  )
}

export default Home

