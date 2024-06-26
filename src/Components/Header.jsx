import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'

function Header() {
  return (
    <div className='fh-header' >
        <div className="wrapper">
            <div className="header-content">
                <aside className="text">
                    <h2 className="text-main">FIQUE SEGURO</h2>
                    <h1>Soluções de segurança eficiente para uma vida melhor.</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quibusdam laborum eum reiciendis 
                      quia omnis voluptatem quas a nemo eius dolorum, corporis tenetur dignissimos magni id cumque asperiores laboriosam molestias.
                    </p>
                    <button className="btn bg-main">Entrar em contacto</button><br /><br />
                    <small className='text-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </aside>
                <aside className="image">
                  <ImageLazyLoading source={"https://media.licdn.com/dms/image/D4D22AQENW-TFKgTywg/feedshare-shrink_800/0/1693494923165?e=2147483647&v=beta&t=S48ZlSJ1mS1dojRhujL8ZZrmbQWCGhZJLGNumPUrS6M"} alt="" /> 
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                   <div className="ln"></div>
                </aside>
            </div>
        </div>
    </div>
  )
}

export default Header