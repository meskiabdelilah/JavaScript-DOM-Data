async function initApp () {
    const Products = await getProducts ();

    renderProductsTable(Products);
}

initApp();