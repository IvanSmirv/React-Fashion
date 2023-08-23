import './sale.css'
import saleImg from '../../img/images/promo-img.jpg'

const Sale = () => {
    return (
        <section className="payday">
            <div className="container">
                <div className="payday__body">
                    <div className="payday__img">
                        <img src={saleImg} alt="" />
                    </div>
                    <div className="payday__description">
                        <p className="payday__title">
                            <span>payday</span>
                            <span>sale now</span>
                        </p>
                        <div className="payday__text">
                            <p>
                                Spend minimal $100 get 30% off
                                voucher code for your next purchase
                            </p>
                            <p>
                                1 June - 10 June 2021
                                *Terms & Conditions apply
                            </p>
                            <a href="#!">shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale