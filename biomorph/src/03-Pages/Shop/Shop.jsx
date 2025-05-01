import Header from "../../02-Components/Header/Header"
import Footer from "../../02-Components/Footer/Footer"
 
const Shop = () =>{

    const data = [
        {
            id: 1,
            name: 'Dead Duck',
            price: 100,
            image: 'https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Dead-Duck-illustration-Design-Vector-eps-Creative-Fabrica.jpg',
            description: 'A dead duck'
        },
        {
            id: 2,
            name: 'Dead Fish',
            price: 45,
            image: 'https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Dead-Fish-illustration-Design-Vector-eps-Creative-Fabrica.jpg',
            description: 'A dead fish'
        },
        {
            id: 3,
            name: 'Dead Bird',
            price: 50,
            image: 'https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Dead-Bird-illustration-Design-Vector-eps-Creative-Fabrica.jpg',
            description: 'A dead bird'
        },
        {
            id: 4,
            name: 'Dead Cat',
            price: 60,
            image: 'https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Dead-Cat-illustration-Design-Vector-eps-Creative-Fabrica.jpg',
            description: 'A dead cat'
        },
        {
            id: 5,
            name: 'Dead Dog',
            price: 70,
            image: 'https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Dead-Dog-illustration-Design-Vector-eps-Creative-Fabrica.jpg',
            description: 'A dead dog'
        }
    ];
    


    return(
        <>
        <Header/>
        {/* Titol de la pàgina */}
        <h1 className="shop-title">Shop:</h1>

        <h1 className="title-section">SKELETONS:</h1>
        <h2 className="subtitle-section">ARTICULATED SKELETONS:</h2>
        
        {/* Div que controla tots els elements  */}
        <div className="card-skeletons">

            {/* Div on estroben els diferents productes (estàn separats)*/}
            {/* Element 1 */}
            <div className="element_1">
                <div>CHIKEN</div>
                <div className="img_prod_1">
                    <img src="../../assets/chiken.png" alt="Chiken photo" />
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>

            </div>

            {/* Element 2 */}
            <div className="element_1">
                <div>BAT</div>
                <div className="img_prod_1">
                    <img src="../../assets/bat.png" alt="Bat photo" />
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>
                
            </div>

            {/* Element 3 */}
            <div className="element_1">
                <div>PIDGEON</div>
                <div className="img_prod_2">
                    <img src="../../assets/pidgeon.png" alt="Pidgeon photo"/>
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>
                            
            </div>
        </div>

        <br />
        <h1 className="title-section">ANIMALES DIAFANIZADOS:</h1>
        <h2 className="subtitle-section">LIMITED EDITION:</h2>
        <div className="card-skeletons">
            {/* Element 1 */}
            <div className="element_1">
                <div>SNAKE</div>
                <div className="img_prod_1">
                    <img src="../../assets/snake.png" alt="snake photo" />
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>

            </div>

            {/* Element 2 */}
            <div className="element_1">
                <div>HEDGEHOG</div>
                <div className="img_prod_1">
                    <img src="../../assets/Hedgehog.png" alt="Hedgehog photo" />
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>
                
            </div>

            {/* Element 3 */}
            <div className="element_1">
                <div>CANARY</div>
                <div className="img_prod_2">
                    <img src="../../assets/canary.png" alt="canary photo"/>
                </div>
                <div className="price">299.99€</div>
                
                <div className="buttons"> 
                    <button>BUY</button>
                    <button>ADD</button>
                </div>
                            
            </div>
        </div>
        
        <Footer />
        
        </>
    )
    
}

export default Shop;