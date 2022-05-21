// Find all the information about each products
db.product.find({}).pretty()
//Find the product price which are between 400 to 800
db.product.find({"product_price": { '$gt': 400, '$lt': 800}})
//Find the product price which are not between 400 to 600
db.product.find({"product_price": {$not:{ '$gt': 400,'$lt':800}}})
//List the four product which are grater than 500 in price
db.product.find({"product_price": { '$gt': 500}})
//Find the product name and product material of each products
db.product.find( {}, {product_name:1,product_material:1} ).pretty()
//Find only the product name and product material
db.product.find( {}, {_id:0,product_name:1,product_material:1} ).pretty()
//Find all products which contain the value of soft in product material 
db.product.aggregate([{$match:{product_material:"Cotton"}}])
//Find products which contain product color indigo  and product price 492.00
db.product.aggregate([{$match:{product_color:"indigo",product_price:492.00}}])
db.product.aggregate([{$match:{product_color:"indigo"}},{$group:{_id:"$product_price"}}])