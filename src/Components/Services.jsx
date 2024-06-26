import React from 'react'
import { LuHeartHandshake } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';


function Services() {
 const Data = [
   {
     icon:<><LuHeartHandshake/></>,
     title:"Vigilancia",
     description:`Desenvolvemos soluções que asseguram a gestão integrada de todos os processos relacionados com a 
     administração de um produto de saúde, garantindo a máxima confiança.`,
   },
   {
    icon:<><LuHeartHandshake/></>,
    title:"Segurança",
    description:`Desenvolvemos soluções que asseguram a gestão integrada de todos os processos relacionados com a 
    administração de um produto de saúde, garantindo a máxima confiança.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"Segurança pessoal",
    description:`Desenvolvemos soluções que asseguram a gestão integrada de todos os processos relacionados com a 
    administração de um produto de saúde, garantindo a máxima confiança.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"Segurança empresarial",
    description:`Desenvolvemos soluções que asseguram a gestão integrada de todos os processos relacionados com a 
    administração de um produto de saúde, garantindo a máxima confiança.`,
  },
  {
    icon:<><LuHeartHandshake/></>,
    title:"Controle de bens",
    description:`Desenvolvemos soluções que asseguram a gestão integrada de todos os processos relacionados com a 
    administração de um produto de saúde, garantindo a máxima confiança.`,
  },
 ];


  return (
    <div className='services bg-black'>
      <div className="wrapper">
          <div className="space">
              <h1>Os serviços com a melhor qualidade para sua empresa</h1>
              <div className="txt"> 
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, dolores ducimus suscipit voluptas, libero excepturi ex omnis corporis ad aperiam blanditiis, debitis optio consequatur. Inventore sapiente laboriosam rem porro nobis!</p>
                 <button className="btn bg-main">Saiba mais <GoArrowUpRight /></button>
              </div>
          </div>
         <section className="wrap-boxes">
            {Data.map((item)=>{
               return(
                <article>
                 <div className="stamp">
                 <div className="icon">{item.icon}</div>
                   <h3>{item.title}</h3>
                   <p>{item.description}</p>
                   <Link className='text-main'>Saiba mais   <GoArrowUpRight /></Link>
                 </div>
                </article>
               )
            })}
           <article className="bg"><div className="stamp bg-main"><div className="center"><h1 className="text-white">Saiba mais</h1></div></div></article>
         </section>
      </div>
    </div>
  )
}

export default Services