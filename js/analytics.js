function filterName (Products, textTyped)
{
    
    const   productsFilter = Products.filter(product => {
        
        const productsToLower = product.name.toLowerCase();
        const textContentLower = textTyped.toLowerCase();

        return productsToLower.includes(textContentLower);
    })

    return productsFilter;
}
