import './styles.css';
import ButtonPrimary from "../../../components/ButtonInverse";
import ButtonInverse from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { ContexCartCount } from '../../../utils/context-cart';

export default function ProductDetails(){

  const params = useParams();

  const navigate = useNavigate();

  const {setContexCartCount} = useContext(ContexCartCount);

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
          setProduct(response.data);
      })
      .catch(() => {
          navigate("/");
      });
   }, []); 
   
   function hendleBuyClick(){
    if(product){
      cartService.addProduct(product);
      setContexCartCount(cartService.getCart().items.length)
      navigate("/cart");
    }      
  }

  return (            
    <main>
      <section id="product-details-section" className="dsc-container">
        {
            product &&
            <ProductDetailsCard product={product} />
           // ? <ProductDetailsCard product={product} />
           // : <h2>Código inválido</h2>
        }
        
        <div className="dsc-btn-page-container">
          <div onClick={hendleBuyClick}>
            <ButtonPrimary text='Comprar' />
          </div>
            <Link to="/">
            <ButtonInverse text='Início' />
            </Link>
        </div>
      </section>
    </main>
 
   
    );
}

