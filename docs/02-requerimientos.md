Requerimientos del Sistema – XMex

-- 1. Introducción

Este documento describe los requerimientos funcionales y no funcionales del sistema web cuyo objetivo es permitir a comerciantes mexicanos publicar y vender sus artesanías dentro de México. La plataforma busca impulsar el comercio local, preservar la identidad cultural y facilitar la compra-venta de productos artesanales de manera segura y accesible.

-- 2. Alcance del Sistema

El sistema permitirá:

* Registro e inicio de sesión de usuarios.
* Publicación de productos artesanales por parte de comerciantes.
* Visualización y compra de productos por clientes.
* Gestión básica de pedidos.

Todo el contenido (usuarios, productos y operaciones) estará limitado a México y realizado por mexicanos.

-- 3. Actores del Sistema

* **Administrador**: Supervisa el funcionamiento del sistema.
* **Comerciante**: Usuario que publica y vende artesanías.
* **Cliente**: Usuario que navega, compra y realiza pedidos.

-- 4. Requerimientos Funcionales

### RF1. Registro de usuarios

El sistema debe permitir que los usuarios se registren proporcionando nombre, correo electrónico, contraseña y tipo de usuario (cliente o comerciante).

### RF2. Inicio de sesión

El sistema debe permitir que los usuarios inicien sesión con correo y contraseña.

### RF3. Gestión de productos

El comerciante debe poder:

* Publicar nuevos productos.
* Editar información de sus productos.
* Eliminar productos.

Cada producto debe incluir nombre, descripción, precio, categoría, imagen y disponibilidad.

### RF4. Visualización de productos

El cliente debe poder:

* Ver el catálogo de productos.
* Consultar detalles de cada producto.

### RF5. Gestión de pedidos

El sistema debe permitir:

* Crear pedidos al seleccionar productos.
* Asociar pedidos a un usuario.
* Consultar el estado del pedido.

--5. Requerimientos No Funcionales

### RNF1. Usabilidad

La interfaz debe ser intuitiva y fácil de usar para todo tipo de usuarios.

### RNF2. Seguridad

Las contraseñas deben almacenarse de forma segura y el acceso a datos debe estar protegido.

### RNF3. Disponibilidad

El sistema debe estar disponible la mayor parte del tiempo para permitir compras continuas.

### RNF4. Rendimiento

El sistema debe responder de manera rápida a las solicitudes de los usuarios.

-- 6. Restricciones

* El sistema solo podrá operar dentro de México.
* Los productos publicados deben ser artesanías mexicanas.
* Los comerciantes deben ser mexicanos.

-- 7. Suposiciones

* Los usuarios cuentan con acceso a internet.
* Los pagos se simulan o se integrarán en una etapa posterior del proyecto.
