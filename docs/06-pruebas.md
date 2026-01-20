# 6. Plan de Pruebas y Calidad

## 6.1 Estrategia de Pruebas
Para garantizar la calidad de la plataforma **xmex**, se aplicará un enfoque de pruebas híbrido, ejecutando pruebas manuales durante el desarrollo y pruebas funcionales finales antes del despliegue.

### Niveles de Prueba:
1.  **Pruebas Unitarias:** Verificación de funciones individuales (ej. cálculo del total del carrito).
2.  **Pruebas de Integración:** Verificar que el módulo de "Usuarios" se comunique correctamente con la "Base de Datos".
3.  **Pruebas de Sistema:** Validación del flujo completo de compra (End-to-End).

## 6.2 Casos de Prueba (Test Cases)
A continuación se describen los escenarios críticos que deben validarse:

| ID | Módulo | Descripción del Caso | Datos de Entrada | Resultado Esperado | Prioridad |
|:---|:---|:---|:---|:---|:---|
| **CP-01** | Login | Iniciar sesión con credenciales válidas. | `user: angel@xmex.com`, `pass: 1234` | Redirección al Home y acceso al perfil. | Alta |
| **CP-02** | Login | Iniciar sesión con contraseña errónea. | `user: angel@xmex.com`, `pass: xxxx` | Mensaje de error: "Credenciales inválidas". | Alta |
| **CP-03** | Catálogo | Filtrar productos por categoría. | Selección: "Textiles" | Solo se muestran blusas y manteles. | Media |
| **CP-04** | Carrito | Agregar un producto al carrito. | Clic en "Agregar" (Jarrón Barro) | El contador del carrito aumenta en 1. | Alta |
| **CP-05** | Carrito | Calcular total con múltiples ítems. | 2 Jarrones ($450 c/u) | Total mostrado: $900.00 MXN. | Alta |
| **CP-06** | Checkout | Simular compra sin stock suficiente. | Intentar comprar 50 piezas (Stock: 10) | Alerta: "Stock insuficiente". | Media |

## 6.3 Métricas de Calidad (Basado en ISO/IEC 25010)
Para asegurar que el software cumple con los estándares profesionales, se medirán los siguientes atributos:

### A. Eficiencia de Desempeño
* **Métrica:** Tiempo de carga del *Home Page*.
* **Meta:** Menor a 2 segundos en conexión 4G.
* **Herramienta de medición:** Google Lighthouse.

### B. Usabilidad
* **Métrica:** Tasa de errores del usuario al intentar comprar.
* **Meta:** Menos del 5% de intentos fallidos por confusión en la interfaz.
* **Validación:** Pruebas con usuarios reales (compañeros de clase).

### C. Seguridad
* **Métrica:** Vulnerabilidades de Inyección SQL.
* **Meta:** 0 vulnerabilidades críticas detectadas.
* **Validación:** Intentos controlados de inyección en el formulario de Login.

## 6.4 Ambiente de Pruebas
* **Navegadores:** Chrome (v120+), Firefox, Edge.
* **Dispositivos:** Laptop (Windows/Linux) y Móvil (Android via DevTools).
* **Servidor Local:** Live Server / XAMPP.
