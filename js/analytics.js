function filterName (Products, textTyped)
{
    
    const   productsFilter = Products.filter(product => {

        const productsToLower = product.name.toLowerCase();
        const textContentLower = textTyped.toLowerCase();

        return productsToLower.includes(textContentLower);
    })

    return productsFilter;
};

function filterCategory (products,selectedCategory)
{
    if (!products || products.length === 0) {
        return [];
    }
    if (selectedCategory === "all"){
        return products;
    }

    return products.filter(product => product.category === selectedCategory);

}

function filterByStock(products, inStockOnly)
{
    if (!products || products.length === 0) {
        return [];
    }
    if (inStockOnly){
        return products.filter(product => product.stock > 0);
    }

    return products;
}

function sortByPrice(products, selectedOrder)
{
    if (!products || products.length === 0) {
        return [];
    }

    const sorted = [...products];

    if (selectedOrder === "asc") {
        return sorted.sort((a, b) => a.price - b.price);
    };
    if (selectedOrder === "desc") {
        return sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
}

