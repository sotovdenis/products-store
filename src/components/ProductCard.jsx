import React, {useState} from 'react';
import {api} from '../services/api';
import StatusIndicator from "./StatusIndicator";

const ProductCard = ({product, onRefresh}) => {
    const [statusOptions] = useState([
        {value: 'CREATED', label: 'Создан'},
        {value: 'SAILED', label: 'Продан'},
        {value: 'ZABRAKOVAN', label: 'Забракован'},
    ]);

    const [currentStatus, setCurrentStatus] = useState(product.status);

    const handleStatusChange = async (event) => {
        const newStatus = event.target.value;

        setCurrentStatus(newStatus);

        try {
            await api.changeStatus(product.id, newStatus);

            product.status = newStatus;

            onRefresh?.();
        } catch (error) {
            console.error('Ошибка при изменении статуса:', error);

            setCurrentStatus(product.status);
        }
    };


    const handleDelete = async () => {
        try {
            await api.deleteProduct(product.id);
            onRefresh();
        } catch (error) {
            console.error('Ошибка при удалении продукта:', error);
        }
    };

    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>Описание: {product.description}</p>
            <p>Цена: {product.price}</p>
            <p>
                Статус:{' '}
                <StatusIndicator status={product.status}/>
            </p>

            <select
                value={currentStatus}
                onChange={handleStatusChange}
                className="status-select"
            >
                {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <button onClick={handleDelete} className="delete-button">
                Удалить
            </button>
        </div>
    );
};

export default ProductCard;