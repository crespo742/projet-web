import TitlePage from "../components/TitlePage";
import Carton from "../public/carton.jpg";
import Eco from "../public/eco.jpg";
import Choquer from "../public/choquer.jpg";
import Monde from "../public/monde.jpg";


export default function Home() {
  return (
    <div>
      <div className="page__home">
        <TitlePage title="FootWear"/>
      </div>
      
      <>
      </>

      <div className="text__center">
        <h4>FootWear est une entreprise qui revend des chaussures au meilleur prix</h4>
      </div>

      <>
      </>

      <section className="homepage">
        <div className="homepage__img__left">
          <img src={Carton.src} alt="nike" height="300px"/>
        </div>
        <div className="homepage__text text__center">
          <p>Nous sommes une entreprise eco-responsable qui utilisons des cartons recyclés pour les envoies de chaussures</p>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__text text__center">
          <p>Nous utilisons un datacenter canadien alimenté à 100% par des énergies vertes (barrages hydroélectriques) et sur de l’énergie exclusivement renouvelable. Cela vaut aussi pour le système de refroidissement.</p>
        </div>
        <div className="homepage__img__right">
          <img src={Eco.src} alt="nike" height="300px"/>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__img__left">
          <img src={Choquer.src} alt="nike" height="300px"/>
        </div>
        <div className="homepage__text text__center">
          <div>
            <p>Comment c'est possible que nous vendons des chaussures a un prix aussi bas ?</p>
          </div>
          <div>
            <p>Tout simplement car nous ne subissons aucune TVA dans notre pays et parce que on achete en tres grande quantite !</p>
          </div>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage__text text__center">
          <p>Ce projet nous tiens a coeur et j'espere qu'il pourra prendre de l'ampleur pour ensuite etre un site web phare dans la vente de chaussures !</p>
        </div>
        <div className="homepage__img__right">
          <img src={Monde.src} alt="nike" height="300px"/>
        </div>
      </section>
    </div>
    
  )
}

