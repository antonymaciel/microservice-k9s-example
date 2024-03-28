const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 4100;

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
