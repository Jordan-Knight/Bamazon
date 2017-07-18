var inquire = require("inquirer");
var mysql = require("mySql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mj52camu",
  database: "Bamazon"
});

var query = "SELECT * FROM products";
var queryId = "SELECT * FROM products WHERE item_id = ?";
var qty;

connection.connect(function(err) {
  if (err) throw err;
  runCustomer();
});

var runCustomer = function(){
    connection.query(query, function(err, res){
        for (i = 0; i < res.length; i++){
            console.log("Item Id: " + res[i].item_id + "\n" +
                        "Product Name: " + res[i].product_name + "\n" +
                        "Department Name: " + res[i].department_name + "\n" +
                        "Price: $" + res[i].price + "\n" +
                        "Stock: " + res[i].stock_quantity + "\n" +
                        "========================================");
        }
        inquire.prompt({
            name: "productSelected",
            type: "input",
            message: "What product would you like to purchase?"
        }).then(function(ans){
            connection.query(queryId, ans.productSelected, function(err, res){
                console.log(res);
                if (err){
                    console.log("The id you entered does not exist.")
                    //runCustomer();
                }
                else{
                    var qty = res.stock_quantity;
                    console.log("Quantity: " + qty);
                    inquire.prompt({
                        name: "quantity",
                        type: "input",
                        message: "How many " + res.product_name + "would you like to buy?"
                    }).then(function(ans){
                        qty = qty - ans;
                        if (qty < 0){console.log("Insufficient quantity in stock."); runCustomer();}
                        else{connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [qty, res.item_id], function(){console.log("Thank you for your purchase.");});}
                        
                    })
                }
            });
        });
    });

}

