function renderProductsTable(products)
{
    const divContainer = document.querySelector('.table-container');
    const table = document.createElement('table');
        table.id = "products-table";
        
    products.forEach(product => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
        tdName.textContent = product.name;

    const tdCategory = document.createElement('td');
        tdCategory.textContent = product.category

    const tdPrice = document.createElement('td');
        tdPrice.textContent = `${product.price} DH`;

    const tdStock = document.createElement('td');
        tdStock.textContent = `${product.stock}`;
        
    const tdRating = document.createElement('td');
        tdRating.textContent = `${product.rating}`;


    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdPrice);
    tr.appendChild(tdStock);
    tr.appendChild(tdRating);

    table.appendChild(tr);
   });

    

    divContainer.appendChild(table);

}

