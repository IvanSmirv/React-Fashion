import './brands.css'

import Amazon from './../../img/brands/Amazon.png';
import HM from './../../img/brands/HM.png';
import Lacoste from './../../img/brands/Lacoste.png';
import Levis from './../../img/brands/Levis.png';
import Obey from './../../img/brands/Obey.png';
import Shopify from './../../img/brands/Shopify.png';

const arrImg = [Amazon, HM, Lacoste, Levis, Obey, Shopify]

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands__body">
                    <div className="brands__items">
                        {
                            arrImg.map((img, index) => {
                                return (
                                    <div className="brands__item">
                                        <a href="#!"><img src={img} alt="" key={index} /></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands