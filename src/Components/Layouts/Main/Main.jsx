import React from 'react'
import { useState } from 'react'
import { Buttons } from '../../UI/Buttons/Buttons'

export const Tweets = []
let Animation = false
let cronometerStop
let press

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

        if(cap===""){
            setAdd("No puedes publicar Tweets vacios!")
        }else{
            setAdd(cap)
            capText("")
        }
        
    }

    //Archivar

    const btnArchive = ()=>{
        let success
        clearTimeout(success)

        let saveTweet = Add
        Tweets.push(saveTweet)

        setAdd("Tweet Archivado!")
        success= setTimeout(()=>{
            setAdd(saveTweet)
        },1500)
    }

    //Mostrar archivados

    const [tweet,setTweet] = useState("No hay nada por aquí :)")

    const btnShowArchive = ()=>{

        if(Tweets.length===0){
            setAdd("No has 'archivado' ningun tweet")
        }else{
            
            Tweets.forEach((element,i) => {      
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
