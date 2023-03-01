import React from 'react'
import { useState } from 'react'
import { Buttons } from '../../UI/Buttons/Buttons'


const Tweets = []
let id = 0
let getLocal

// variables de animacion
let Animation = false
let cronometerStop
let press

//Coversion del arreglo Tweets
let convertString
let convertArray

let saveKey
let getKey


export const Main = () => {

    const [cap,capText] = useState("")

    const captureText = (e)=>{

        let value = e.target.value

        if(value.length <= 255){
            capText(value)
            setCount(255-value.length)
        }
        
    }

    //Contador
    const [count,setCount] = useState(255)

    // Publicar
    const [Add,setAdd] = useState('Aqui verás tu tweet actual')

    const btnAdd = ()=>{

        clearInterval(press)
        clearTimeout(cronometerStop)

        if(cap===""){
            setAdd("No puedes publicar Tweets vacios!")
        }else{
            setAdd(cap)
            capText("")
        }
        
    }

    //Archivar

    const btnArchive = ()=>{

        clearInterval(press)
        clearTimeout(cronometerStop)
        Animation=false

        let success
        clearTimeout(success)

        let saveTweet = Add
        Tweets.push(saveTweet)

        setAdd("Tweet Archivado!")
        success= setTimeout(()=>{
            setAdd(saveTweet)
        },1500)

        convertString = JSON.stringify(Tweets)

        id++
        saveKey = localStorage.setItem("key",id)
        localStorage.setItem(id,convertString)
        console.log(id);
    }

    //Mostrar archivados

    const [tweet,setTweet] = useState()

    const btnShowArchive = ()=>{

        clearInterval(press)
        clearTimeout(cronometerStop)
        Animation=false

        getKey =localStorage.getItem("key")
        getLocal = localStorage.getItem(getKey)
        convertArray = JSON.parse(getLocal)
        
        console.log(convertArray);

        if(convertArray===null){
            setAdd("No has 'archivado' ningun tweet")
        }else{
            
            convertArray.forEach((element,i) => {      
                i++
                setTweet(prevState => [prevState,<p key={i}>{i+". "+element}</p>])
            });

        }

    }

    // Animacion Escritura

    const keyAnimation = ()=>{

        // Cuando escuche el evento keyUp inicia la animacion y luego de 10s la desactiva para que no entre al setInterval con cada keyUp
        let saveText = cap
        let point = "Escribiendo Tweet"

        clearTimeout(cronometerStop)

        if(Animation === false){
            Animation = true

            press = setInterval(()=>{

                if(point==="Escribiendo Tweet..."){
                    point="Escribiendo Tweet"
                }else{
                    setAdd(point+=".")
                }
    
            },600)
        }

        // Compara el texto escrito hace 10 segundos(saveText) con el tweet actual(cap) 
        cronometerStop = setTimeout(()=>{
            if(cap===saveText){

                clearInterval(press)
                setAdd("Termina tu tweet!")
                Animation = false

            }   
        },10000)

    }

  return (

    <main id="main">

        <section id="principalContainer">

            <div id="head">
                <p>Publica tu tweet</p>
            </div>

            <div id='containerText'>

                <textarea value={cap} onChange={captureText}  onKeyUp={keyAnimation} id="textArea" placeholder="limite de caracteres '225'">
                    
                </textarea>

            </div>

            <div id="foot">

                <div id='containerButtons'>

                    <Buttons 
                        click = {btnAdd}
                        identifier = 'Button'
                        textButton = 'Publicar'
                    />

                    <Buttons 
                        click = {btnArchive}
                        identifier = 'Button'
                        textButton = 'Archivar'
                    />

                    <Buttons 
                        click = {btnShowArchive}
                        identifier = 'Button'
                        textButton = 'Mostrar Archivados'
                    />

                </div>

                
                <div id='containerFootText'>

                    <div id='space'>

                    </div>

                    <div id='text'>
                        <p>{Add}</p>
                    </div>

                    <div id='containerCount'>
                        <p>{count}</p>
                    </div>

                </div>

            </div>

        </section>

        {/* footer */}

        <footer id='footer'>

        <div id='FooterTitle'>
          <h3>Aqui se veran sus tweets archivados</h3>
        </div>
        
        <div id='containerTweets'>
            {tweet}
        </div>

        </footer>

    </main>
    
  )
}
