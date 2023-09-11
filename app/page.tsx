'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import tona from './tona.module.css';
import { Container } from 'postcss';


export default function Home() {
  return (
    <main>
      <div className={tona.gred}>
        <span className={tona.mtit}>
          <p className={tona.tit}>
            Inicio
          </p>
        </span>
        <span className={tona.enla}>
          <a href='#' className={tona.lk1}> Link1 </a>
          <a href='#' className={tona.lk1}> Link2 </a>
          <a href='#' className={tona.lk1}> Link3 </a>
          <a href='#' className={tona.lk1}> Link4 </a>
          <a href='#' className={tona.lk1}> Link5 </a>
          <a href='#' className={tona.lk1}> Link6 </a>
        </span>
      </div>
      <div className={tona.hw}>
        <span className={tona.pan1}>
          <p className={tona.hm1}>¡Hola, mundo!</p>
          <p className={tona.txthw}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vel architecto minima, incidunt doloribus quibusdam facilis eius molestiae dolorum rem veniam non, aliquid ullam suscipit voluptas, repudiandae amet. Quidem accusantium suscipit, aspernatur reiciendis saepe esse nam cum dolores laudantium possimus nostrum velit repellendus? Tenetur maxime, provident laudantium laborum error ea.</p>
          <a href="#" className={tona.leer}>Leer mas...</a>
        </span>
        <span className={tona.pan2}>
          <p className={tona.titnv}>Novedad del Mes</p>
          <p className={tona.txtnv}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic doloremque id dolores qui assumenda deserunt, inventore at! Cumque, dolores!</p>
          <p className={tona.vacio}>_________________</p>
          <p className={tona.pienv}>Lorem ipsum dolor sit amet consectetur.</p>
        </span>
      </div>
      <div className={tona.astross}>
        <span className={tona.asst}>
          <p className={tona.assss}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quod. Alias, vero. <a href="#" className={tona.asss}>Lorem, ipsum.</a></p>
        </span>
      <div className={tona.prod}>
        <div className={tona.produc}>
          <p className={tona.pr1tit}>Producto 1</p>
          <p className={tona.pr1text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vitae dolorem cupiditate aliquid error rerum id, placeat officia tenetur. Nemo eligendi laborum adipisci ea in cumque. Ipsa omnis repellendus iure ducimus voluptatum maxime quo rerum?</p>
          <p className={tona.lem}><a href="#" className={tona.leer}>Leer mas...</a></p>      
        </div>
        <div className={tona.produc}>
          <p className={tona.pr1tit}>Producto 2</p>
          <p className={tona.pr1text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic placeat esse sit, cum quaerat explicabo qui dicta, temporibus perferendis veritatis perspiciatis harum itaque laboriosam?</p>
          <p className={tona.lem}><a href="#" className={tona.leer}>Leer mas...</a></p>      
        </div>
        <div className={tona.produc}>
          <p className={tona.pr1tit}>Producto 3</p>
          <p className={tona.pr1text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab facilis necessitatibus iusto, vero quis suscipit libero quibusdam est debitis reprehenderit?</p>
          <p className={tona.lem}><a href="#" className={tona.leer}>Leer mas...</a></p>       
        </div>
        <div className={tona.produc}>
          <p className={tona.pr1tit}>Producto 4</p>
          <p className={tona.pr1text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vitae dolorem cupiditate aliquid error rerum id, placeat officia tenetur. Nemo eligendi laborum adipisci ea in cumque. Ipsa omnis repellendus iure ducimus voluptatum maxime quo rerum?</p>
          <p className={tona.lem}><a href="#" className={tona.leer}>Leer mas...</a></p>     
        </div>
      </div>
      </div>
      <div className={tona.blue}>
        <h1 className={tona.bhe}>Blueprints</h1>
      </div>
      <div className={tona.txtimp}>
        <p className={tona.timp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum tenetur maiores molestiae enim rerum veniam accusamus vero dolores architecto? Vel consequatur expedita repudiandae optio tempora hic quibusdam sed incidunt repellendus reprehenderit inventore ea, molestias dolorum voluptatum et non? Doloremque quasi inventore consequatur dolorem deleniti delectus qui quos, reprehenderit ut!</p>
        <p className={tona.timp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum tenetur maiores molestiae enim rerum veniam accusamus vero dolores architecto? Vel consequatur expedita repudiandae optio tempora hic quibusdam sed incidunt repellendus reprehenderit inventore ea, molestias dolorum voluptatum et non? Doloremque quasi.</p>
      </div> 
      <div className={tona.cont}>
        <Image src="./as1.jpg" className={tona.primg} />
        <Image src="./as2.jpg" className={tona.primg} />
        <Image src="./as3.jpg" className={tona.primg} />
        <Image src="./as4.jpg" className={tona.primg} />
        <Image src="./as5.jpg" className={tona.primg} />
        <Image src="./as6.jpg" className={tona.primg} />
        <p className={tona.primg1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aliquam.</p>
        <p className={tona.primg1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aliquam.</p>
        <p className={tona.primg1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aliquam.</p>
      </div>
      <div className={tona.carrudo}>
        <div className={tona.contcarru} id="car1">
          <div className={tona.tarcarru1}>
            <span className={tona.img6x3}><Image src="./car1.jpg" className={tona.carimg8} /></span>
            <span className={tona.descr}>
              <div className={tona.catit}>Lorem, ipsum dolor.</div>
              <div className={tona.castit}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
              <div className={tona.cades}>
                <p className={tona.list}>1. Lorem, ipsum dolor.</p>
                <p className={tona.list}>2. Lorem, ipsum dolor.</p>
                <p className={tona.list}>3. Lorem, ipsum dolor.</p>
                <p className={tona.list}>4. Lorem, ipsum dolor.</p>
                <p className={tona.list}>5. Lorem, ipsum dolor.</p>
                <p className={tona.list}>6. Lorem, ipsum dolor.</p>
              </div>
            </span>
          </div>
          <div className={tona.Cfles}>
            <a href="#car3"><Image src="./lit.png" className={tona.cf} /></a>
            <a href="#car2"><Image src="./rit.png" className={tona.cf}/></a>
          </div>
        </div>
        <div className={tona.contcarru} id="car2">
          <div className={tona.tarcarru2}>
          <span className={tona.img6x3}><Image src="./car2.jpg" className={tona.carimg8} /></span>
            <span className={tona.descr}>
              <div className={tona.catit}>Lorem, ipsum dolor.</div>
              <div className={tona.castit}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
              <div className={tona.cades}>
                <p className={tona.list}>1. Lorem, ipsum dolor.</p>
                <p className={tona.list}>2. Lorem, ipsum dolor.</p>
                <p className={tona.list}>3. Lorem, ipsum dolor.</p>
                <p className={tona.list}>4. Lorem, ipsum dolor.</p>
                <p className={tona.list}>5. Lorem, ipsum dolor.</p>
                <p className={tona.list}>6. Lorem, ipsum dolor.</p>
              </div>
            </span>
          </div>
          <div className={tona.Cfles}>
            <a href="#car1"><Image src="./lit.png" className={tona.cf} /></a>
            <a href="#car3"><Image src="./rit.png" className={tona.cf}/></a>
          </div>
        </div>
        <div className={tona.contcarru} id="car3">
          <div className={tona.tarcarru3}>
          <span className={tona.img6x3}><Image src="./car3.jpg" className={tona.carimg8} /></span>
            <span className={tona.descr}>
              <div className={tona.catit}>Lorem, ipsum dolor.</div>
              <div className={tona.castit}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
              <div className={tona.cades}>
                <p className={tona.list}>1. Lorem, ipsum dolor.</p>
                <p className={tona.list}>2. Lorem, ipsum dolor.</p>
                <p className={tona.list}>3. Lorem, ipsum dolor.</p>
                <p className={tona.list}>4. Lorem, ipsum dolor.</p>
                <p className={tona.list}>5. Lorem, ipsum dolor.</p>
                <p className={tona.list}>6. Lorem, ipsum dolor.</p>
              </div>
            </span>
          </div>
          <div className={tona.Cfles}>
            <a href="#car2"><Image src="./lit.png" className={tona.cf} /></a>
            <a href="#car1"><Image src="./rit.png" className={tona.cf}/></a>
          </div>
        </div>
       </div>
       <div className={tona.llamada}>
        <h1 className={tona.tilla}>Llamanos y Nosotros te Ayudamos</h1>
        <p className={tona.comunic}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nostrum!
        <a href="#" className={tona.llam}>Llamanos ... </a>
        </p>
       </div>
      <div className={tona.enca}>
        <h1 className={tona.head}>Lo que la gente opina</h1>
        <h2 className={tona.shead}>Sus comentarios son muy importante para nosotros</h2>
      </div>
      <div className={tona.comentarios}>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolore.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, impedit numquam distinctio magni, tempora perferendis obcaecati ad quas vero officia non eligendi saepe nemo possimus.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem veritatis possimus, a quibusdam maxime, earum autem, non aut est obcaecati reprehenderit doloremque dolore sapiente quo nulla natus! Culpa vitae similique vel, earum quod sed nemo magnam praesentium commodi at.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio placeat voluptates accusamus ab sequi deserunt odit nulla nam? Animi voluptatem praesentium delectus quas, recusandae quo. Eum illo minima fugiat?</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolore.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
        <span className={tona.coment}>
          <p className={tona.titcom}>bueno</p>
          <p className={tona.txtcom}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minus dicta perspiciatis accusamus, illum expedita minima molestias amet optio dolor, consequuntur maxime.</p>
          <p className={tona.autcom}>Lorem ipsum dolor sit.</p>
        </span>
      </div>
      <div className={tona.update}>
        <p className={tona.updhead}>Novedades</p>
        <p className={tona.updshead}>No te pierdas nuestras novedades y unete a nuestros amigos para que sepas todo lo que hacemos</p>
        <center>
          <section className={tona.fotm}>
            <input type="email" className={tona.correo} id="correo" placeholder="Escriba su correo" />
            <input type="submit" className={tona.alta} value="Registrarse" />            
          </section>
          <p className={tona.updpie}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sint harum doloribus, obcaecati accusantium cumque!</p>
          <Image src="./next.svg.png" className={tona.updimg} fluid />
        </center>  
      </div>
      <div className={tona.spie}>
        <span className={tona.as1}>
          <Image src="./tona.png" className={tona.pieimg} fluid />
          <p className={tona.txtpie}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo eaque ipsum ullam doloribus odit reprehenderit facilis perspiciatis atque aspernatur!</p>
          <a href="#" className={tona.vin1}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
          <a href="#" className={tona.vin3}>Vinculo 1</a>
        </span>
        <span className={tona.as1}>
          <p className={tona.txtpie}>Lorem, ipsum dolor.</p>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <a href="#" className={tona.vin2}>Vinculo 1</a>
          <p className={tona.txtpie1}>Buscar</p>
          <section className={tona.fotm}>
            <input type="email" className={tona.buscar} id="correo" placeholder="Que desea Buscar" />
            <input type="submit" className={tona.search} value="Buscar" />            
          </section>
        </span>
      </div>
      <div className={tona.fpie}>
        <span className={tona.ads1}>
        <p className={tona.stpie}>Lorem ipsum dolor sit amet consectetur. | <a href="#" className={tona.fvin}>Vinculo 1</a> | <a href="#" className={tona.fvin}>Vinculo 2</a></p>
        </span>
        <span className={tona.ads2}>
          <Image src="./logo1.png" className={tona.fimg} fluid /> 
          <Image src="./logo2.png" className={tona.fimg} fluid /> 
          <Image src="./logo3.png" className={tona.fimg} fluid /> 
          <Image src="./logo4.png" className={tona.fimg} fluid /> 
          <Image src="./logo5.png" className={tona.fimg} fluid /> 
          <Image src="./logo6.png" className={tona.fimg} fluid /> 
        </span>
      </div>
    </main>
  )
}
