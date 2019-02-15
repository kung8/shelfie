DELETE
from product
where product_id = $1;

SELECT * 
FROM product 
ORDER BY product_id;