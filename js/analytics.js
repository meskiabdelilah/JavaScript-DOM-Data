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

