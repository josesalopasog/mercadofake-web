# MercadoFake

**MercadoFake** es un clon de Mercado Libre Colombia construido con tecnologías modernas como **React**, **Vite.js**, **TailwindCSS** y **HeroIcons**. Este proyecto es de código abierto y está diseñado para aprender, colaborar y experimentar con estas tecnologías.

## Características principales

- **Interfaz moderna y responsiva** utilizando TailwindCSS.
- **Desempeño optimizado** gracias a Vite.js.
- **Componentes reutilizables** para un desarrollo ágil con HeroIcons.
- **Funcionalidades básicas de un mercado en línea**, como búsqueda de productos y vista de detalles.

---

## Tecnologías utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Vite.js](https://vitejs.dev/): Herramienta de desarrollo rápida y eficiente.
- [TailwindCSS](https://tailwindcss.com/): Framework de CSS para construir interfaces de usuario modernas.
- [HeroIcons](https://heroicons.com/): Conjunto de íconos SVG de alta calidad.

---

## Instalación y configuración

### Clonar el repositorio

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/josesalopasog/mercadofake-web
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd mercadofake-web
   ```

### Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Luego, ejecuta:

```bash
npm install
```

### Ejecutar el servidor de desarrollo

Inicia el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

Esto abrirá el proyecto en tu navegador en la dirección `http://localhost:5173`.

---

## Cómo contribuir

### Paso 1: Realiza un fork del repositorio

Haz clic en el botón **Fork** en la parte superior derecha de la página del repositorio para crear una copia en tu cuenta de GitHub.

### Paso 2: Clona tu fork

Clona el repositorio desde tu cuenta de GitHub:

```bash
git clone https://github.com/josesalopasog/mercadofake-web
```

### Paso 3: Crea una rama para tu cambio

Crea una nueva rama con un nombre descriptivo:

```bash
git checkout -b fix/mi-arreglo
```

### Paso 4: Realiza los cambios

Haz tus modificaciones en el código. Asegúrate de seguir las guías de estilo del proyecto y de que todo funcione correctamente.

### Paso 5: Haz un commit de tus cambios

Guarda tus cambios con un mensaje claro:

```bash
git add .
git commit -m "Descripción breve del cambio"
```

### Paso 6: Envía tu rama al repositorio remoto

```bash
git push origin fix/mi-arreglo
```

### Paso 7: Abre un Pull Request (PR)

1. Ve a la página del repositorio original en GitHub.
2. Haz clic en **Pull Requests** y luego en **New Pull Request**.
3. Selecciona tu rama y describe los cambios realizados.

### Paso 8: Responde a las revisiones

Colabora con los mantenedores del proyecto respondiendo a los comentarios y ajustando tu código si es necesario.

---

## Scripts disponibles

En el proyecto puedes ejecutar los siguientes scripts:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera una versión optimizada para producción.
- **`npm run preview`**: Previsualiza la versión de producción localmente.
- **`npm run lint`**: Verifica problemas de estilo en el código.

---

## Estructura del proyecto

```plaintext
mercadofake-web/
├── node_modules/       # Dependencias del proyecto
├── public/             # Archivos estáticos
├── src/
│   ├── Components/     # Componentes reutilizables
│   ├── Context/        # Manejo de contexto global
│   ├── Pages/          # Páginas principales de la aplicación
│   │   ├── App/        # Lógica principal de la aplicación
│   │   ├── Categories/ # Página de categorías
│   │   ├── CreateAccount/ # Página de registro
│   │   ├── GoBackHome/ # Componente para redirección
│   │   ├── Help/       # Página de ayuda
│   │   ├── Home/       # Página de inicio
│   │   ├── MyCart/     # Página del carrito de compras
│   │   ├── MyOrder/    # Página de detalles del pedido
│   │   ├── MyProfile/  # Página del perfil del usuario
│   │   ├── MyPurchases/# Historial de compras
│   │   ├── NotFound/   # Página 404
│   │   ├── Products/   # Página de productos
│   │   ├── SearchList/ # Página de resultados de búsqueda
│   │   ├── SignIn/     # Página de inicio de sesión
│   │   └── Tecnology/  # Página de tecnología
│   ├── Utils/          # Utilidades y funciones auxiliares
│   ├── index.css       # Estilos globales
│   ├── main.jsx        # Punto de entrada de la aplicación
├── .gitignore          # Archivos y carpetas ignorados por Git
├── eslint.config.js    # Configuración de ESLint
├── index.html          # Archivo principal HTML
├── package.json        # Dependencias y scripts
├── package-lock.json   # Versión fija de dependencias
├── postcss.config.js   # Configuración de PostCSS
├── README.md           # Documentación del proyecto
├── tailwind.config.js  # Configuración de TailwindCSS
└── vite.config.js      # Configuración de Vite
```

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE). Siéntete libre de usarlo, modificarlo y distribuirlo.

---

## Créditos

Desarrollado con 💻 y ☕ por José Salopaso. ¡Espero tus contribuciones!

---

## Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un [issue](https://github.com/josesalopasog/mercadofake-web/issues) o contactame por correo electrónico en `josesalopaso.13@gmail.com`.

