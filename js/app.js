async function initApp () {
    const products = await getProducts ();

    renderProductsTable(products);

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (event) =>{
        const textTyped = event.target.value ;
        const filteredResult = filterName(products, textTyped);

        console.log(filteredResult);

        renderProductsTable(filteredResult);

    });

    const selectedCategory = document.getElementById("select-category");
    selectedCategory.addEventListener("change", (event) => {
        const selectedCategory = event.target.value ;
        const filteredCategories = filterCategory(products,selectedCategory);

        renderProductsTable(filteredCategories);
    });

    renderCategoryOptions(products);

    const stockCheckbox = document.getElementById("stock-checkbox");

    stockCheckbox.addEventListener("change", (event) => {
        const isChecked = event.target.checked;
    
        const filteredProducts = filterByStock(products, isChecked);
    
    renderProductsTable(filteredProducts);
    });

    const sortSelect = document.getElementById("sort-price");

    sortSelect.addEventListener("change", (event) => {
        const selectedOrder = event.target.value;
    
        const sortedProducts = sortByPrice(products, selectedOrder);
    
    renderProductsTable(sortedProducts);
    });
}

initApp();