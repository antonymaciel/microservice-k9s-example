exports.getProducts = (req, res) => {
    const mockProducts = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
    ];
    res.json(mockProducts);
};

exports.getProductById = (req, res) => {
    const mockProduct = { id: req.params.id, name: 'Product A', price: 100 };
    res.json(mockProduct);
};
