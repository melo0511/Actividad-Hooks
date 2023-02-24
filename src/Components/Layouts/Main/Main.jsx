import React from 'react'
import { useState } from 'react'
import { Buttons } from '../../UI/Buttons/Buttons'

const Tweets = []

export const Main = (prop) => {

    const [cap,capText] = useState("")

    const captureText = (e)=>{

        let value = e.target.value

        if(value.length <= 255){
            capText(value)
            setCount(value.length)
        }
        
    }

    //Contador
    const [count,setCount] = useState(0)

    // Publicar
    const [Add,setAdd] = useState('Aqui verás tu tweet actual')

    const btnAdd = ()=>{
        setAdd(cap)
        capText("")
    }

    //Archivar

    const btnArchive = ()=>{
        let saveTweet = Add
        Tweets.push(saveTweet)
        console.log(Tweets);
    }

    //Mostrar archivados

    const [archive,setArchive] = useState()

    const btnShowArchive = ()=>{

        if(Tweets.length===0){
            setAdd("No has 'archivado' ningun tweet")
        }else{
            
            let i= 0

            Tweets.forEach(element => {

                <p>{i+". "+element}</p>
                i++
                console.log(i+"."+element);

            });

        }

    }

  return (

    <main id="main">

        <section id="principalContainer">

            <div id="head">
                <p>Publica tu tweet</p>
            </div>

            <div id='containerText'>

                <textarea value={cap} onChange={captureText}  id="textArea" placeholder="limite de caracteres '225'">
                    
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

    </main>
  )
}
