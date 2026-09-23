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

}

initApp();