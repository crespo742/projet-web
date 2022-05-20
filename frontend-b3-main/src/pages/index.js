import TitlePage from "../components/TitlePage";
import Carton from "../public/carton.jpg"


export default function Home() {
  return (
    <div>
      <div className="page__home">
        <TitlePage title="FootWear"/>
      </div>
      
      <>
      </>

      <div className="text__center">
        <p>FootWear est une entreprise qui revend des chaussures au meilleur prix</p>
      </div>

      <>
      </>

      <section className="homepage">
        <div className="homepage__img">
          <img src={Carton.src} alt="nike" height="300px"/>
        </div>
        <div className="homepage__text">
          <p>Nous sommes une entreprise eco-responsable qui utilisons des cartons recyclés pour les envoies de chaussures</p>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__text">
          <p>Depuis 2015 nous avons recycler jusqu'a 1000 tonnes de déchets</p>
        </div>
        <div className="homepage__img">
          <img src={Carton.src} alt="nike" height="300px"/>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__img">
          <img src={Carton.src} alt="nike" height="300px"/>
        </div>
        <div className="homepage__text">
          <p>lorem diazbfe fjazeo aziqhefohq oefqigfqfgqezhfazhefierlg jhqeorgh ôseh gpuhe cfherxh foezhfxuqze wfiuhqse iufxbqhrgxrng xpoeqrhgqcfg th rth rth dhdhfthdfgjd yjdf dftd h fghe tyetyhthsthsr yjtyjet yjtyj turuyjrt yj tyj tydhdfy ty jth rdf dgyj</p>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__text">
          <p>lorem diazbfe fjazeo aziqhefohq oefqigfqfgqezhfazhefierlg jhqeorgh ôseh gpuhe cfherxh foezhfxuqze wfiuhqse iufxbqhrgxrng xpoeqrhgqcfg th rth rth dhdhfthdfgjd yjdf dftd h fghe tyetyhthsthsr yjtyjet yjtyj turuyjrt yj tyj tydhdfy ty jth rdf dgyj</p>
        </div>
        <div className="homepage__img">
          <img src={Carton.src} alt="nike" height="300px"/>
        </div>
      </section>
    </div>
    
  )
}

