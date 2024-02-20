# JMOM Login
Proyecto de una página de login y registro básico desarrollado en React.

## Autor
- Autor: **Josué Miguel Ortiz Meza**
- Materia: **Aplicaciones Web para I4.0**
- Unidad: **Unidad II - Frameworks para Web empresarial**
- Grupo: **GDS0551**

## Instalación

1. Ejecuta el siguiente comando: `git clone https://github.com/JosueMiguelOM/jmom-login-angular.git`, desde la terminal de git para clonar el proyecto a una carpeta.
2. Ejecuta: `npm install`, desde la terminal de la carpeta del proyecto para instalar las dependencias utilizadas y faltantes.

## Ejecución
1. Abre una terminal en el proyecto
2. Ejecuta el comando: `npm start`, este comando por defecto ejecutara el proyecto por el puerto `3000`.
3. Ejecuta el comando `json-serve --watch data.json ` para ejecutar el Json-Server

## Uso
1. Abre tu navegador e ingresa la ruta http://localhost:3000/. Esto abrirá la página de inicio de sesión de forma predeterminada.
2. Para registrar un nuevo usuario, haz clic en el enlace llamado Registrarse.
3. Ingresa los datos necesarios y presiona el botón Registrarse.
4. Ingresa los datos que registraste en el login y presiona el botón Iniciar Sesión.
5. Una vez validados los datos, serás redirigido a la página de inicio (Home), donde podrás salir con el botón Cerrar sesión.

## Datos adicionales
Si ingresas una ruta incorrecta, la página te redireccionará a la página de Iniciar Sesión.
Si intentas acceder a la ruta /home sin haber iniciado sesión, serás redirigido a la página de Iniciar Sesión.
Cada campo validará que se hayan ingresado datos y, en el caso del registro de contraseñas, que estas coincidan.
