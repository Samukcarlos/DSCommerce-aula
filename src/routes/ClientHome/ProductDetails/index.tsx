import './styles.css';
import ButtonPrimary from "../../../components/ButtonInverse";
import ButtonInverse from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bela ",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }


  ]
}
export default function ProductDetails(){
    return (
            
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
            <ButtonPrimary text='Comprar' />
            <ButtonInverse text='Início' />
        </div>
      </section>
    </main>
 
   
    );
}

