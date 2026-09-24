async function initApp () {
    const products = await getProducts ();

    const state = {
        textTyped : "",
        selectedCategory : "all",
        inStockOnly: false,
        selectedOrder: "none"
    };

    function applyFilters()
    {
        const visibleProducts = getVisibleProducts(products, state);
        renderProductsTable(visibleProducts);
    };

    renderCategoryOptions(products);
    applyFilters();


    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (event) =>{
        state.textTyped = event.target.value ;
        applyFilters();

    });

    const selectedCategory = document.getElementById("select-category");
    selectedCategory.addEventListener("change", (event) => {
        state.selectedCategory = event.target.value ;
        applyFilters();

    });


    const stockCheckbox = document.getElementById("stock-checkbox");
    stockCheckbox.addEventListener("change", (event) => {
        state.isChecked = event.target.checked;
        applyFilters();

    });

    const sortSelect = document.getElementById("sort-price");
    sortSelect.addEventListener("change", (event) => {
        state.selectedOrder = event.target.value;
        applyFilters();
        
    });
}

initApp();