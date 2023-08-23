import Card from '../Card/Card'
import './arrivals.css'
import cat1 from '../../img/categories/cat-01.jpg'
import cat2 from '../../img/categories/cat-02.jpg'
import cat3 from '../../img/categories/cat-03.jpg'

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__body">
                    <p className="arrivals__title">
                        New arrivals
                    </p>
                    <div className="arrivals__cards">
                        <Card img={cat1} text='Hoodies & Sweetshirt' />
                        <Card img={cat2} text='Coats & Parkas' />
                        <Card img={cat3} text='Tees & T-Shirt' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arrivals