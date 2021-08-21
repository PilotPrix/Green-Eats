let listingsNum = 1
function Add(){
    const foodAdder = document.getElementById("Food Adder")
    const listings = document.getElementById("Listing")
    listingsNum += 1

    //Add listing after the one before
    listings.innerHTML += '<h3>Food Item ' + listingsNum + '</h3> <input type="text" name="food item" placeholder="Enter food item (eg. Apples)" required> <input type="number" name="quantity" placeholder="Enter amount" required> <input type="number" name="price" placeholder="Price $$ for each" required> <br>'
    //Add delete if it isn't added already
    if(listingsNum == 2){
        foodAdder.innerHTML += '<button type="button" onclick="Delete()">Delete</button>'
    }
}

function Delete(){
    alert("Deleted")
}
