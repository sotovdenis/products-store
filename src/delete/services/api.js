import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const api = {
    getProducts: async () => {
        const response = await axios.get(`${BASE_URL}/product/all`);
        return response.data;
    },

    getProductById: async (id) => {
        const response = await axios.get(`${BASE_URL}/product/${id}`);
        return response.data;
    },

    createProduct: async (product) => {
        const response = await axios.post(`${BASE_URL}/product/all`, product);
        return response.data;
    },

    updateProduct: async (product) => {
        const response = await axios.put(`${BASE_URL}/product/all`, product);
        return response.data;
    },

    deleteProduct: async (id) => {
        await axios.delete(`${BASE_URL}/product/all`, { data: { id: id } });
    },

    changeStatus: async (productId, newStatus) => {
        await axios.put(`${BASE_URL}/product/all`, null, {
            headers: {
                id: productId,
                newStatus: newStatus,
            }
        });
    }

};