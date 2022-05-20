import Link from "next/link";
import Button from "../components/Button";

const Productcard = (props) => {
  
    return (
        <div className="product__card">
          <div class="shell">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                      <img src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} alt={props.product.attributes.title} />
                    </div>
                    <div class="wsk-cp-text">
                      <div class="title-product">
                        <h3>{props.product.attributes.title}</h3>
                      </div>
                      <div class="description-prod">
                        <p>{props.product.attributes.description}</p>
                      </div>
                      <div class="card-footer">
                        <div class="wcf-left"><span class="price">{props.product.attributes.price} €</span></div>
                        <div class="wcf-right">
                        <p>
                            <Link href={`/shop/${props.product.id}`}>
                            {/* <Link href={'/shop/' + props.product.id} */}
                              <a>
                                <Button title="Voir le produit" type="button" classes="btn btn__color-black"/>
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            
    );
}

export default Productcard;
