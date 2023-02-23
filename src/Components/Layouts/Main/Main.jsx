import React from 'react'
import { Buttons } from '../../UI/Buttons/Buttons'

export const Main = () => {
  return (
    <main id="main">
        <section id="principalContainer">

            <div id="head">
                <p>Publica tu tweet</p>
            </div>

            <textarea name="" id="textArea" cols="30" rows="10">

            </textarea>

            <div id="foot">

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

        </section>
    </main>
  )
}
