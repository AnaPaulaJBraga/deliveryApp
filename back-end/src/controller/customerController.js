const sale = require('../service/customerService');

const getByCustomerId = async (req, res) => {
  const { id } = req.params;
  const response = await sale.getByCustomerId(id);

  res.status(200).json(response);
};

module.exports = {
  getByCustomerId,
};