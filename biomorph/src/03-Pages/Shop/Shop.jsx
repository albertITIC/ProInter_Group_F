// Fitxer dinàmic
import { useState, useEffect } from 'react';
import Header from "../../02-Components/Header/Header";
import Footer from "../../02-Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();
    const [skeletons, setSkeletons] = useState([]);
    const [embryos, setEmbryos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch para esqueletos (categoría 'bones')
                const skeletonsResponse = await fetch('http://127.0.0.1:8000/products/bones/');
                if (!skeletonsResponse.ok) throw new Error('Error cargando esqueletos');

                // Fetch para embriones (categoría 'embriones')
//                 const embryosResponse = await fetch('/products/all/?category=embriones');
                const embryosResponse = await fetch('http://127.0.0.1:8000/products/embriones/');

                if (!embryosResponse.ok) throw new Error('Error cargando embriones');

                const [skeletonsData, embryosData] = await Promise.all([
                    skeletonsResponse.json(),
                    embryosResponse.json()
                ]);

                setSkeletons(skeletonsData);
                setEmbryos(embryosData);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const renderProductCard = (product) => (
        <div className="element_1" key={product.id_product}>
            <div>{product.name.toUpperCase()}</div>
            <div className="img_prod_1">
                <img
                    src={`http://127.0.0.1:8000/${product.image_url}`}
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = '../../assets/placeholder.png';
                    }}
                />
            </div>
            <div className="price">{product.price}€</div>
            <div className="buttons">
                <button>COMPRAR</button>
                <button>AÑADIR</button>
            </div>
        </div>
    );

    if (loading) return <div className="loading">Cargando productos...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <>
            <Header/>
            <h1 className="shop-title">Shop:</h1>

            <h1 className="title-section">SKELETONS:</h1>
            <h2 className="subtitle-section">ARTICULATED SKELETONS:</h2>

            <div className="card-skeletons">
                {skeletons.map(renderProductCard)}
            </div>

            <br />

            <h1 className="title-section">ANIMALES DIAFANIZADOS:</h1>
            <h2 className="subtitle-section">LIMITED EDITION:</h2>

            <div className="card-skeletons">
                {embryos.map(renderProductCard)}
            </div>

            <Footer />
        </>
    );
};

export default Shop;