import React, {useState} from 'react';
import {api} from '../services/api';

const CreateForm = ({onRefresh}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProduct = {
            name,
            description,
            price: parseFloat(price),
        };
        await api.createProduct(newProduct);
        onRefresh();
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="create-form">
            <h2>Добавить новый продукт</h2>
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
            <button type="submit">Добавить</button>
        </form>
    );
};

export default CreateForm;