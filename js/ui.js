function renderProductsTable(products)
{
    const divContainer = document.querySelector('.table-container');
        divContainer.innerHTML = "";

// Validation : Verifier si le tableau existe et n'est pas vide
    if(!products || products.length === 0)
    {
        const DataMsg = document.createElement('p');
            DataMsg.textContent = "Aucun produit trouve";

            divContainer.appendChild(DataMsg);
        return; // Stopper l'exécution si aucun produit
    }

    const table = document.createElement('table');
        table.id = "products-table";

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

// Generation dynamique des (th) a partir des cles du premier objet
    const keys = Object.keys(products[0])
        keys.forEach(key => {

            const th = document.createElement('th');
            th.textContent = key

            headerRow.appendChild(th);
        });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    
        
    const tbody = document.createElement('tbody');
    
    products.forEach(product => {
        const tr = document.createElement('tr');


        const tdId = document.createElement('td');
            tdId.textContent = `${product.id}`;
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

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdCategory);
        tr.appendChild(tdPrice);
        tr.appendChild(tdStock);
        tr.appendChild(tdRating);

        tbody.appendChild(tr);
   });

    table.appendChild(tbody);
    divContainer.appendChild(table);

}

