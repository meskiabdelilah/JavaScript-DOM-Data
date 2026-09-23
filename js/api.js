async function getProducts ()
{
    try {
        const reponse = await fetch('data/products.json');
        if (!reponse.ok) {
            throw new Error("file not defend ");
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