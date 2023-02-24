import React from 'react'
import { Buttons } from '../../UI/Buttons/Buttons'

export const Main = () => {
  return (
    <main id="main">
        <section id="principalContainer">

            <div id="head">
                <p>Publica tu tweet</p>
            </div>

            <div id='containerText'>

                <textarea name="" id="textArea" placeholder="limite de caracteres '225'">

                </textarea>

            </div>

            <div id="foot">

                <div id='containerButtons'>

                    <Buttons 
                        click = ''
                        identifier = 'Button'
                        textButton = 'Publicar'
                    />

                    <Buttons 
                        click = ''
                        identifier = 'Button'
                        textButton = 'Archivar'
                    />

                    <Buttons 
                        click = ''
                        identifier = 'Button'
                        textButton = 'Mostrar Archivados'
                    />

                </div>

                
                <div id='containerFootText'>

                    <div id='space'>

                    </div>

                    <div id='text'>
                        <p>Aqui se verá tu tweet</p>
                    </div>

                    <div id='containerCount'>
                        <p>255</p>
                    </div>

                </div>

            </div>

        </section>
    </main>
  )
}
