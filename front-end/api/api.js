import axios from 'axios';

const URL = 'http://localhost:3001';

const repositoryVagas = {
    async getVagas() {
        try {
            const response = await axios.get(`${URL}/vagas`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar vagas:', error);
            throw error;
        }
    },

    async getVagaById(id) {
        try {
            const response = await axios.get(`${URL}/vaga/${id}`);
            return console.log(response.data);
        } catch (error) {
            console.error(`Erro ao buscar vaga com ID ${id}:`, error);
            throw error;
        }
    }
};

export default repositoryVagas;