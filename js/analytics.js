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

function getVisibleProducts (products, state)
{
    let result = filterName(products, state.textTyped);
    result = filterCategory(result,state.selectedCategory);
    result = filterByStock(result, state.inStockOnly);
    result = sortByPrice(result, state.selectedOrder);

    return result;
}

function getTotalOrdersCount(orders)
{
    if (!orders || orders.length === 0) return 0;
    // console.log(orders.length);
    
    return orders.length
}

 function getTotalCA(orders)
{
    if (!orders || orders.length === 0) return 0;
    
    const totalCaEl= orders.reduce((accOrder, order) => {
        const orderTotal = order.items.reduce((accItem, item)=> {
            return accItem + (item.quantity * item.unitPrice);
        },0);
        return accOrder + orderTotal ;
    },0);
    // console.log(totalCaEl);
    return totalCaEl ;
}

function getAverageBasket(orders)
{
    if (!orders || orders.length === 0) return 0;
    
    const totalCa = getTotalCA(orders);
    const  totalOrders = getTotalOrdersCount(orders);

    let average = totalCa / totalOrders;
        average = Number(average.toFixed(2));

    return average;
}

function getDeliveredOrdersCount(orders)
{
    if (!orders || orders.length === 0) return 0;

    const delivered = orders.filter(order => order.status === "delivered").length; 

    return delivered
}

function getPendingOrdersCount(orders)
{
    if (!orders || orders.length === 0) return 0;

    const pending = orders.filter(order => order.status === "pending").length; 
        
    return pending;
}

function getDeliveryRate(orders)
{
    if (!orders || orders.length === 0) return 0;

    const deliveredOrders = getDeliveredOrdersCount(orders);
    const totalOrders = getTotalOrdersCount(orders);

    let deliveredRate = (deliveredOrders / totalOrders) *100 ;
        deliveredRate = Number(deliveredRate.toFixed(2));
    
    return deliveredRate
}
