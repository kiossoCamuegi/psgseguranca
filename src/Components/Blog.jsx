import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';

function Blog() {
  return (
    <div className='blog'>
       <div className="wrapper">
            <div className="space">
               <div> <h1>Fique atento as noticias sobre a segurança no país e no mundo !</h1></div>
               <div className="txt" >
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, molestias! Natus reprehenderit iusto at consectetur autem laboriosam temporibus dolor labore, omnis ipsum eum, numquam quidem pariatur sapiente? Rerum, rem eveniet.</p>
                  <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
               </div>
            </div>
            <div className="blog-boxes">
               <div className="v-boxes">
                  <article>
                     <div className="image">
                       <ImageLazyLoading source="https://www.ohub.com.br/ideias/wp-content/uploads/2020/05/seguranca-patrimonial-desarmada-armada-660x330.png" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>Enquanto a segurança pública é dever do Estado, a segurança privada é uma faculdade de proteger a si ...</h1>
                     <p>Sustentando esta evolução, empenhados em manter a qualidade do serviço e conscientes da relevância da preservação do meio ambiente e da segurança e saúde no trabalho, em 2012 alargámos a certificação existente na qualidade, às áreas do ambiente e segurança e saúde no trabalho, implementando um Sistema Integrado de Gestão (Qualidade, Ambiente e Segurança e Saúde no Trabalho) ...</p>
                  </article>
                  <article>
                     <div className="image">
                         <ImageLazyLoading source="https://media.licdn.com/dms/image/D4D12AQFGaCjxVCwcQg/article-cover_image-shrink_720_1280/0/1681989774512?e=2147483647&v=beta&t=dq77lkAVTVOwdrfzibqXgCQMHSgfmrzTKWfKewO2Za8" />
                     </div>
                     <div className="step">Nova</div>
                     <h1>Enquanto a segurança pública é dever do Estado, a segurança privada é uma faculdade de proteger a si ...</h1>
                     <p>Sustentando esta evolução, empenhados em manter a qualidade do serviço e conscientes da relevância da preservação do meio ambiente e da segurança e saúde no trabalho, em 2012 alargámos a certificação existente na qualidade, às áreas do ambiente e segurança e saúde no trabalho, implementando um Sistema Integrado de Gestão (Qualidade, Ambiente e Segurança e Saúde no Trabalho) ...</p>
                  </article>
               </div>
               <article className='vt-box'>
                     <div className="image">
                        <ImageLazyLoading source="https://cdn.e-konomista.pt/uploads/2019/07/11415605-971258016239340-797168311814568151-o_1502896078-850x514.jpg" />
                     </div>
                    <div className="text">
                    <div className="step">Nova</div>
                     <h1>Enquanto a segurança pública é dever do Estado, a segurança privada é uma faculdade de proteger a si ...</h1>
                     <p>Sustentando esta evolução, empenhados em manter a qualidade do serviço e conscientes da relevância da preservação do meio ambiente e da segurança e saúde no trabalho, em 2012 alargámos a certificação existente na qualidade, às áreas do ambiente e segurança e saúde no trabalho, implementando um Sistema Integrado de Gestão (Qualidade, Ambiente e Segurança e Saúde no Trabalho) ...</p>

                     </div>
                  </article>
            </div>

       </div>
    </div>
  )
}

export default Blog