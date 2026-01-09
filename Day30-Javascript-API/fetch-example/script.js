const apiUrl = "https://fakestoreapi.com/users";

fetch(apiUrl).then(response => {
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json(); 
}).then(data => {
    console.log("Users Data",data);
}).catch(err => {
    console.error(err);    
});

const url = "https://fakestoreapi.com/products";

fetch(url).then(response => {
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json(); 
}).then(data => {
    console.log("Products data",data);
}).catch(err => {
    console.error(err);    
});

// datatype -> object
    // json - JavaScript Object Notation
    // it converts the json structure into object

    // {
    //     name: "narasimhan",
    //     role: "mentor"
    // }
