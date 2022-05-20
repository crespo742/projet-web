import TitlePage from "../components/TitlePage";
import Carton from "../public/carton.jpg"


export default function Home() {
  return (
    <div>
      <div className="page__home">
        <TitlePage title="Homepage"/>
      </div>
      <section className="homepage">
        <div className="homepage__img">
          <img src={Carton.src} alt="nike" />
        </div>
        <div className="homepage__text">
          <p>lorem diazbfe fjazeo aziqhefohq oefqigfqfgqezhfazhefierlg jhqeorgh ôseh gpuhe cfherxh foezhfxuqze wfiuhqse iufxbqhrgxrng xpoeqrhgqcfg th rth rth dhdhfthdfgjd yjdf dftd h fghe tyetyhthsthsr yjtyjet yjtyj turuyjrt yj tyj tydhdfy ty jth rdf dgyj</p>
        </div>
      </section>
    </div>
    
  )
}

