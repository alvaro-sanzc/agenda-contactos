# Agenda de Contactos
## 📑 Índice

- [Agenda de Contactos](#agenda-de-contactos)
  - [📑 Índice](#-índice)
  - [📖 Descripción](#-descripción)
  - [✨ Funcionalidades](#-funcionalidades)
    - [Autenticación de usuarios](#autenticación-de-usuarios)
    - [Gestión de contactos](#gestión-de-contactos)
    - [Sistema de chat](#sistema-de-chat)
  - [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
  - [⚙️ Instalación](#️-instalación)
  - [▶️ Ejecución](#️-ejecución)
  - [📂 Estructura del proyecto](#-estructura-del-proyecto)
  - [👨‍💻 Autor](#-autor)

## 📖 Descripción

Proyecto academico que consiste en una **aplicación web** desarrollada con **Node.js**, **Express** y **EJS** que permite gestionar una agenda de contactos.  
Este proyecto fue creado con fines educativos con el objetivo de aprender a utilizar **Node.js**, comprender cómo funciona su entorno de desarrollo y practicar la creación de aplicaciones web en el lado del servidor.

---

## ✨ Funcionalidades

### Autenticación de usuarios

- Registro de usuario.
- Login de usuario.
- Logout de usuario.

### Gestión de contactos

- Ver la lista de contactos.
- Crear contactos en la agenda.
- Editar contactos en la agenda.
- Eliminar contactos en la agenda.

### Sistema de chat

- Chat entre 2 usuarios registrados.
- Chat entre más de 2 usuarios registrados.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **EJS(Embedded JavaScript)**
- **CSS y JavaScript**
- **express-session**
- **dotenv**

---

## ⚙️ Instalación

1. Clonar el repositorio y entrar en la carpeta src del proyecto:

```bash
git clone https://github.com/tu-usuario/agenda-contactos.git
cd agenda-contactos/src
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno, puede cambiar el valor de `PORT` si lo desea:

```env
PORT=3000
```

---

## ▶️ Ejecución

1. Para iniciar la aplicación, ejecutar el siguiente comando:

```bash
npm start
```

2. Abrir el navegador y acceder a `http://localhost:3000` para ver la aplicación en funcionamiento.

---

## 📂 Estructura del proyecto

Agenda-Contactos/
├── docs/
│   ├── img/  -> Carpeta que contiene las imágenes utilizadas en la documentación.
│   └── Documentación.pdf -> Archivo PDF que contiene la documentación del proyecto.
├── src/
│   ├── bin/
│   │   └── www -> Archivo de configuración para iniciar el servidor.
│   ├── database/
│   │   ├── models/ -> Carpeta que contiene los modelos de la base de datos.
│   │   └── index.js -> Contenido de la BBDD.
│   ├── middleware/ -> Carpeta que contiene los middlewares de la aplicación.
│   ├── public/ -> Carpeta que contiene los archivos estáticos (CSS, imágenes, etc.).
│   ├── routes/ -> Carpeta que contiene las rutas de la aplicación.
│   ├── views/ -> Carpeta que contiene las vistas de la aplicación.
│   ├── app.js -> Archivo principal de la aplicación.
│   └── package.json -> Archivo de configuración del proyecto.
├── .env -> Archivo de configuración de variables de entorno.
├── .gitignore -> Archivo que especifica los archivos y carpetas que Git debe ignorar.
├── LICENSE -> Archivo de licencia del proyecto.
└── README.md -> Archivo de documentación del proyecto.

---

## 👨‍💻 Autor

Desarrollado por **Álvaro Sanz Cortés**

- GitHub: https://github.com/alvaro-sanzc
- LinkedIn:  https://www.linkedin.com/in/%C3%A1lvaro-sanz-cort%C3%A9s-463222267/