import axios from 'axios';

const predictionService = {
  getOutlook: async (stock) => {
    return await axios.get(`http://localhost:8080/api/prediction/${stock['1. symbol']}`);
  }
};

export default predictionService;