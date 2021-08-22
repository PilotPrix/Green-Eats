let listingsNum = 1

function Add(){
    const listings = document.getElementById("Listings")
    listingsNum += 1

    //Add listing after the one before
    listings.innerHTML += '<div id="Listing_' + listingsNum + '"> <h3>Food Item ' + listingsNum + '</h3> <input type="text" name="food_item_' + listingsNum + '" placeholder="Enter food item (eg. Apples)" required> <input type="number" name="quantity_' + listingsNum + '" placeholder="Enter amount" required> <input type="number" name="price_' + listingsNum + '" placeholder="Price $$ for each" required> <button type="button" onclick="Delete(' + listingsNum + ')">Delete</button> <br> </div>'
}

function Delete(n){
    //Delete listing
    const listing = document.getElementById("Listing_" + n)
    listing.remove()
    listingsNum -= 1

    const listings = document.getElementById("Listings").children
    //rename all listings below deleted one
    for(let i = n - 1; i < listings.length; i++){
        listings[i].id = "Listing_" + (i + 1)
        listings[i].getElementsByTagName("h3")[0].innerHTML = "Food Item " + (i + 1)
        listings[i].getElementsByTagName("Button")[0].setAttribute("onclick", "Delete(" + (i + 1) + ")")
        
        listings[i].getElementsByTagName("input")[0].setAttribute("name", "food item_" + (i + 1))
        listings[i].getElementsByTagName("input")[1].setAttribute("name", "quantity_" + (i + 1))
        listings[i].getElementsByTagName("input")[2].setAttribute("name", "price_" + (i + 1))
    }
}
