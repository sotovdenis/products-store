import React, { useState } from 'react';
import { api } from '../services/api';

const CreateForm = ({ onRefresh }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const parsedPrice = parseFloat(price);

        if (parsedPrice < 0) {
            setError('Цена не может быть отрицательной');
            return;
        }

        const newProduct = {
            name,
            description,
            price: parsedPrice,
            brand
        };

        try {
            await api.createProduct(newProduct);
            onRefresh();
            setName('');
            setDescription('');
            setPrice('');
            setBrand('');
            setError(null);
        } catch (err) {
            setError('Ошибка при создании продукта');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="create-form">
                <h2>Добавить новый продукт</h2>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <input
                    type="text"
                    placeholder="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Цена"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Брэнд"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default CreateForm;
