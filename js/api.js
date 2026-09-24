async function getProducts ()
{
    try {
        const reponse = await fetch('data/products.json');
        if (!reponse.ok) {
            throw new Error("file not defined ");
        }
        const products = await reponse.json();
        // console.log(products);
        return products ;
    }
    catch (error){
        console.log("Error (products): ", error);
        return [];
    }

}

getProducts();

async function getOrders ()
{
    try {
        const reponse = await fetch('data/orders.json');
        if (!reponse.ok) {
            throw new Error('file not defined');
        }
        const orders = await reponse.json()
        // console.log(orders);
        return orders
    } catch (error) {
        console.log("Error (orders);", error);
        return []
    }
}

getOrders() ;