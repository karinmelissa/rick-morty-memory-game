# 🧠 Rick & Morty - Juego de Memoria

Este es un juego de memoria temático con personajes de *Rick and Morty*, desarrollado con **React y TypeScript**. La experiencia está optimizada para navegadores modernos y dispositivos móviles, con animaciones suaves, persistencia de datos y una UI Simple y entretenida.

---

## 🛠️ Enfoque de desarrollo

El enfoque fue **componentizar al máximo la UI**, mantener la lógica del juego desacoplada (custom hooks), y garantizar una experiencia visual fluida y responsiva. Se buscó también una estructura escalable que permita extender fácilmente la lógica si se desea en proximas iteraciones (por ejemplo, sumar dificultad, niveles o autenticación real).

**Principios seguidos**:

- Componentes reutilizables (`Card`, `Button`, `Stats`, etc.)
- Hooks personalizados para lógica (`useMemoryGame`)
- Separación de lógica de datos (`utils`, `services`)
- Persistencia ligera (con `localStorage`)
- Interfaz simple e intuitiva con elementos temáticos
- Carga anticipada de imágenes para mejorar performance

---

## ⚙️ Decisiones técnicas

- **React + TypeScript**: Por tipado estático, autocompletado, y mantenimiento más seguro.
- **CSS Modules**: Aislamiento de estilos por componente sin colisiones.
- **Mock de autenticación**: Simula login de usuario sin backend real, útil para pruebas o demos sin servidor.
- **LocalStorage**: Para guardar de forma simple los usuarios simulados.
- **Custom Hook (`useMemoryGame`)**: Encapsula la lógica del juego: turns, matches, estado del tiempo, etc.
- **Preload de imágenes**: Se pre-cargan antes de iniciar para evitar parpadeos o demoras en la animación.
- **Diseño responsive**: Adaptado para mobile, incluyendo modo landscape.

---

## 🚀 Cómo correr el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/karinmelissa/rick-morty-memory-game.git
cd juego-memoria-rick
```

2. Instala dependencias 
```bash
npm install
```

3. Corre el proeycto en desarrollo:
```bash
npm run dev
```

4. Accede desde tu navegador 
```bash
http://localhost:5173
```
## 💾 Uso de LocalStorage

- **Mock de autenticacion**: Cuando el usuario inicia sesión, los datos se guardan en localStorage bajo una clave como:

```json
{
  "currentUser": {
    "username": "morty_smith",
    "id": "abc123"
  },
  "token": "rickmorty_token_123"
}
```
Esto permite mantener el estado de "autenticado" incluso si el usuario refresca la página.

- **Mock de Users**: Al registrar nuevos usuarios, se guardan en localStorage bajo un objeto:

```json
{
  "users":[
    {"email": "user1@email.com", "username":"User 1", "password":"123456"},
    {"email": "user2@email.com", "username":"User 2", "password":"123456"},
  ],
}
```


## 🎨 Extras

- Confetti de victoria 🎉 con react-confetti.
- Animaciones en el giro de cartas con CSS3.
- Slider de instruccione iniciales.
