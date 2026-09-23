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
    
        
// Generation dynamique du <tbody> via Object.entries
    const tbody = document.createElement('tbody');
    
    products.forEach(product => {
        const tr = document.createElement('tr');

        const values = Object.entries(product)
        values.forEach(([key, value] )=> {
            const td = document.createElement('td');

            if (key === 'price') {
                    td.textContent = `${value} DH`;
            }else{
                    td.textContent = value;
            }
            tr.appendChild(td);    
        })

        tbody.appendChild(tr);
   });

    table.appendChild(tbody);
    divContainer.appendChild(table);

}

