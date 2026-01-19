use master
create database XMex
go

CREATE TABLE Usuarios (
    id_usuario INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    correo NVARCHAR(100) NOT NULL UNIQUE,
    contrasena NVARCHAR(255) NOT NULL,
    tipo_usuario NVARCHAR(20) CHECK (tipo_usuario IN ('cliente','comerciante','admin')) NOT NULL,
    fecha_registro DATETIME DEFAULT GETDATE()
);
GO

-- Tabla Productos
CREATE TABLE Productos (
    id_producto INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    descripcion NVARCHAR(MAX) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoria NVARCHAR(50),
    imagen NVARCHAR(255),
    stock INT NOT NULL,
    id_comerciante INT NOT NULL,
    CONSTRAINT FK_Productos_Usuarios
        FOREIGN KEY (id_comerciante) REFERENCES Usuarios(id_usuario)
);
GO

-- Tabla Pedidos
CREATE TABLE Pedidos (
    id_pedido INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha_pedido DATETIME DEFAULT GETDATE(),
    estado NVARCHAR(20) CHECK (estado IN ('pendiente','enviado','entregado')) DEFAULT 'pendiente',
    total DECIMAL(10,2),
    CONSTRAINT FK_Pedidos_Usuarios
        FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
GO
