# CONVENTIONS

## Objetivo

Este documento define las reglas de desarrollo de Entrena App.

Todas las nuevas funcionalidades deben respetar estas convenciones.

---

# Filosofía

Siempre priorizar:

- simplicidad
- legibilidad
- mantenibilidad
- escalabilidad

Evitar soluciones complejas si una solución simple resuelve el problema.

---

# Arquitectura

La aplicación está organizada por responsabilidades.

```
src/

assets/
components/
context/
data/
hooks/
layout/
pages/
services/
styles/
utils/
```

---

# Componentes

Cada componente tendrá su propia carpeta.

Ejemplo

```
WorkoutCard/

WorkoutCard.jsx
```

Más adelante podrá contener

```
WorkoutCard/

WorkoutCard.jsx
WorkoutCard.css
WorkoutCard.test.jsx
index.js
```

---

# Nombres

## Carpetas técnicas

Siempre minúsculas

```
assets
components
context
hooks
layout
pages
services
styles
utils
```

---

## Componentes

Siempre PascalCase

```
WorkoutCard
ExerciseCard
RoutineCard
StudentCard
Button
Input
Modal
```

---

## Pages

Siempre PascalCase

```
Dashboard
Workout
Admin
Exercises
Routines
Students
```

---

## Hooks

Siempre camelCase

```
useWorkout.js

useStudents.js

useExercises.js
```

---

## Utilidades

Siempre camelCase

```
formatTime.js

calculateProgress.js
```

---

## Data

Siempre minúsculas

```
exercises.js

students.js

routines.js
```

---

# CSS

Cada componente tendrá su propio archivo CSS cuando sea necesario.

No crear CSS global innecesario.

---

# Componentes

Un componente = una responsabilidad.

Ejemplo

WorkoutCard

Responsabilidad:

Mostrar el entrenamiento del día.

No debe contener lógica de alumnos.

No debe contener lógica de administración.

---

# Páginas

Una página organiza componentes.

No debe contener demasiada lógica.

---

# Estado

Primero:

props

Luego:

Context API

Redux solamente si realmente es necesario.

---

# Commits

Formato obligatorio

```
feat:
fix:
docs:
style:
refactor:
test:
chore:
```

Ejemplos

```
feat: add workout card

fix: correct navigation bug

docs: update roadmap

style: improve dashboard spacing

refactor: simplify layout
```

---

# Regla principal

Nunca crear componentes que todavía no estén siendo utilizados.

Nunca crear funcionalidades por anticipado.

Construir únicamente lo necesario para el Sprint actual.

---

# Calidad

Antes de hacer un commit verificar:

✔ El proyecto compila.

✔ No existen errores.

✔ La funcionalidad funciona.

✔ El código es legible.

✔ El componente tiene una única responsabilidad.
