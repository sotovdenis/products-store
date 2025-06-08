import React, {useEffect, useState} from 'react';
import {api} from '../services/api';
import ProductCard from '../components/ProductCard';
import CreateForm from '../components/CreateForm';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [sortStatus, setSortStatus] = useState('ALL');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const productsData = await api.getProducts();
        setProducts(productsData);
    };

    const handleRefresh = () => {
        fetchProducts();
    };

    const filteredProducts = sortStatus === 'ALL'
        ? products
        : products.filter(product => product.status === sortStatus);

    return (
        <div className="form">
            <h1>Список продуктов</h1>

            <div>
                <CreateForm onRefresh={handleRefresh}/>
                <div className="sort-controls">
                    <label htmlFor="status-sort">Сортировать по статусу: </label>
                    <select
                        id="status-sort"
                        value={sortStatus}
                        onChange={(e) => setSortStatus(e.target.value)}
                    >
                        <option value="ALL">Все</option>
                        <option value="CREATED">Создан</option>
                        <option value="SAILED">Продан</option>
                        <option value="ZABRAKOVAN">Забракован</option>
                    </select>
                </div>

                <div className="cards-container">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onRefresh={handleRefresh}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ProductsPage;