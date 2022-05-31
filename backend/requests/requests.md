# Requests

## /api/products

  - GET /api/products -> todos los productos
  - GET /api/products:id -> buscar producto por id
  - POST /api/products -> crear nuevo producto
  - DELETE /api/products -> borrado logico de un producto
  - PUT /api/products -> actualizar datos

## /api/sales

  - GET /api/sales -> todas las ventas
  - GET /api/sales/:id -> detalles de una venta por id
  - POST /api/sales -> crear una venta nueva
  - DELETE /api/sales -> borrar una venta incorrecta
  - PUT /api/sales -> actualizar los datos de una venta

## /api/contacts

  - GET /api/contacts -> todos los contactos
  - GET /api/contacts:id -> detalles de un contacto
  - POST /api/contacts -> crear un nuevo contacto
  - DELETE /api/contacts -> borrado logico de un contacto
  - PUT /api/contacts -> actualizar los datos de un contacto

## /api/auth

  - POST /api/auth -> iniciar sesion

## Productos

  - nombre
  - descripcion
  - marca
  - disponibilidad
  - inventario
  - precio unitario
  - categorias

```
{
    "name": "nombre producto",
    "description": "lorem ipsum",
    "brand": "marca",
    "availability": "En Stock || Fuera de Stock",
    "stock": 10,
    "price": 10.99,
    "categories": [
        "categoria-a",
        "categoria-b"
    ],
    "image": {
      "type": "image/png",
      "data": "base64"
    }
}
```

## Ventas

  - timestamp

```
{
    "timestamp": "2022-06-12-23:59:59"
    "contactId": "ObjectId(abc6725efdc7123)",
    "products": [
        {
            "productId":"ObjectId(abc6725efdc7123)",
            "quantity": 2
        },
        {
            "productId":"ObjectId(abc6725efdc7123)",
            "quantity": 2
        },
        {
            "productId":"ObjectId(abc6725efdc7123)",
            "quantity": 2
        }
    ]
}
```

## Contactos

  - nombre
  - apellido
  - ci
  - correo electronico
  - telefono

```
{
    "ObjectId": "abc6725efdc7123"
    "name": "Pancho",
    "lastName": "Belmonte",
    "ci": 8463250,
    "email": "pancho.belmonte@ucb.edu.bo",
    "phone": 75887878
}
```

 