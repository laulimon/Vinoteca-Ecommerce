### Vinoteca - Ecommerce
Onboarging-Endava es una aplicación web que permite realizar seguimiento al proceso de ONBOARDING de los nuevos empleados de la organización.

Entre las funcionalidades más importantes tenemos:

Registro de nuevos empleados.

Asignación de tareas de los procesos de onboarding y los respectivos responsables de ejecución.

Como usuario del sistema tengo una visualización eficiente de mis tareas.

Tableros de seguimiento.

Emails de notificación de asignación de tareas, de cercanía de vencimiento, reportes semanales.

### Ejecutar instalación de paquetes de Node
Ejecutar el comando npm install tanto en el directorio del back, (/back), como del Front (/front).

### Crear Base de Datos
Ejecutar desde la terminal de psql el comando createdb winery (previa instalación de Postgress SQL DB).

### npm start
Ejecutar el comando npm start en el directorio del back, (/back) para levantar el servidor. El mismo estará disponible en el puerto 3000 (http://localhost:3000)

IMP: Modificar el estado de la db en el archivo server (/back/app.js), a true, para levantar la estructura de las tablas. Luego setearlo a false, para evitar el reinicio constante de la base. db.sync({ force: false }). Esto deberá hacerse ante cada modificación que suceda en el modelo de dicha base.

### npm run build
Ejecutar el comando npm run build en el directorio del front, (/front) para correr webpack.

### Seedeo de la DB
Ejecutar el comando node seed.js en el directorio del back, (/back) para realizar un carga automática de los productos. Cabe destacar que en la carpeta "back" podrán encontrar un archivo más de seed, el cuale no es indispensables para el funcionamiento de la aplicación. Fue utilizado para testear el desarrollo.

Al crear un el primer usuario administrador se deberá setear desde las tablas de la db su tipo de usuario como admin.


Datos de contacto:
Laura Limon lauralimonmolina@gmail.com 