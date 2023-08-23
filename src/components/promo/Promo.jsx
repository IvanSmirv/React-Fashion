import promoImg from './../../img/images/header-img.jpg';
import './promo.css'

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__body">
                    <div className="promo__description">
                        <p className="promo__title">
                            <span>let’s</span>
                            <span>explore</span>
                            <span>unique</span>
                            <span>clothes.</span>
                        </p>
                        <div className="promo__text">
                            <p>Live for Influential and Innovative fashion!</p>
                        </div>
                        <div className="promo__links">
                            <a href="#!">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo