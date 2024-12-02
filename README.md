# **📦 Product Manager**

## **📖 Descripción del Proyecto**
Este proyecto es una aplicación web que permite gestionar productos mediante operaciones como agregar, editar, eliminar y actualizar información. Combina un **frontend** desarrollado en React con un **backend** implementado en ASP.NET Core (versión 8), usando **Tailwind CSS** para el diseño y **SQL Server** como base de datos.

---

## **✨ Funcionalidades Principales**

- **Gestión de Productos:**
    - **✅** Agregar nuevos productos con nombre, descripción y categoría.
    - **✅** Editar productos existentes.
    - **✅** Eliminar productos de la base de datos.
    - **✅** Ver productos listados en una tabla interactiva.

- **Gestión de Categorías:**
    - **✅** Agregar, editar y eliminar categorías.

---

## **🛠️ Tecnologías Utilizadas**

- **Frontend:** React, Tailwind CSS, Vite.
- **Backend:** ASP.NET Core 8, Entity Framework Core.
- **Base de Datos:** SQL Server.
- **Herramientas de Desarrollo:** Visual Studio 2022.

---

## **🗂️ Estructura del Proyecto**

### **Backend**: `ProductManager.Server`
- **📁 Context**: Contiene la configuración del contexto de la base de datos:
  - `AppDbContext.cs`
- **📁 Controllers**: Define los endpoints para manejar las operaciones de productos y categorías:
  - `ProductsController.cs`
  - `ProductCategoriesController.cs`
- **📁 Migrations**: Archivos generados para manejar los cambios en la base de datos.
- **📁 Models**: Clases que representan las entidades del sistema:
  - `Product.cs`
  - `ProductCategory.cs`
- **📄 Program.cs**: Configuración principal para inicializar la aplicación.

### **Frontend**: `productmanager.client`
- **📁 src/components**:
  - **Formularios**: Componentes reutilizables para agregar y actualizar productos:
    - `FormNewProduct.jsx`
    - `FormUpdateProduct.jsx`
  - **Tablas**: Presentación de datos:
    - `Table.jsx`
    - `ProductData.jsx`
  - **Íconos y utilidades**:
    - `Logo.jsx`
    - `Loading.jsx`
- **📁 src/context**:
  - `ProductContext.jsx`: Contexto global para manejar el estado de los productos.
- **🎨 Diseño**: Configuración de estilos en `tailwind.config.js`.

---

## **🔗 Endpoints Disponibles**

### **ProductCategoriesController**
- `GET /api/ProductCategories`  
  Obtiene todas las categorías.
- `GET /api/ProductCategories/{id}`  
  Obtiene una categoría específica por ID.
- `POST /api/ProductCategories`  
  Crea una nueva categoría.
- `PUT /api/ProductCategories/{id}`  
  Actualiza una categoría existente.
- `DELETE /api/ProductCategories/{id}`  
  Elimina una categoría.

### **ProductsController**
- `GET /api/Products`  
  Obtiene todos los productos (incluyendo las categorías).
- `GET /api/Products/{id}`  
  Obtiene un producto específico por ID.
- `POST /api/Products`  
  Crea un nuevo producto.
- `PUT /api/Products/{id}`  
  Actualiza un producto existente.
- `DELETE /api/Products/{id}`  
  Elimina un producto.

---

## **🚀 Cómo Ejecutar el Proyecto**

### **Backend**
1. Abre la solución (`ProductManager.sln`) en **Visual Studio 2022**.
2. Configura tu base de datos en `appsettings.json` si es necesario.
3. Corre las migraciones para preparar la base de datos:

   ```bash
   dotnet ef database update

4. Ejecuta el backend desde Visual Studio (F5 o Ctrl + F5).

---

## **🪐  Navega al directorio del frontend.**

1. Navega al directorio del frontend:
   ```bash
    cd productmanager.client

2. Instala las dependencias:

    ```bash
    npm install

3.  Ejecuta el servidor de desarrollo

    ```bash
    npm run start


