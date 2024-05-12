# micro-service

## Setup

* gateway
  ```sh
  cd gateway
  ```
  ```sh
  npm install @nestjs/microservices
  ```
* user
  ```sh
  cd user
  ```
  ```sh
  npm install @nestjs/microservices
  ```
* product
  ```sh
  cd product
  ```
  ```sh
  npm install @nestjs/microservices
  ```
* order
  ```sh
  cd order
  ```
  ```sh
  npm install @nestjs/microservices
  ```

## API
### User Service
  
`GET {{localhost}}/users`

`GET {{localhost}}/user/2`

`POST {{localhost}}/user/`
* body
  ```sh
  {
    "name": "Leo Garcia"
  }
  ```

`PUT {{localhost}}/user/3`
* body
  ```sh
  {
    "name": "Nicholas Sanchez"
  }
  ```

`DELETE {{localhost}}/user/1`

### Product Service

`GET {{localhost}}/products`

`GET {{localhost}}/product/1`

`POST {{localhost}}/product`
* body
  ```sh
  {
    "name": "PlayStation3",
    "category": "Game console"
  }
  ```

`PUT {{localhost}}/product/2`
* body
  ```sh
  {
    "name": "iPhone 15 Pro Max",
    "category": "Electronics"
  }
  ```

`DELETE {{localhost}}/product/1`

### Order Service

`GET {{localhost}}/orders`

`GET {{localhost}}/order/3`

`POST {{localhost}}/order`
* body
  ```sh
  {
    "order_date": "30/03/2077",
    "userID": 3,
    "order_details": {
        "detail1": "detail999",
        "detail2": "detail2"
    }
  }
  ```

`PUT {{localhost}}/order/1`
* body
  ```sh
  {
    "order_date": "30/03/2011",
    "userID": 2,
    "order_details": {
        "detail1": "detail111",
        "detail2": "detail111"
    }
  }
  ```

`DELETE {{localhost}}/order/2`



