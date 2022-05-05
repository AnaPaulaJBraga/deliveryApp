const sale = require('../service/saleService');

const getById = async (req, res) => {
  const { id } = req.params;
  
  const response = await sale.getById(id);

  res.status(200).json(response);
};

module.exports = {
  getById,
};
