# CONVENTIONS

# Entrena App

Versión: 1.0

---

# Objetivo

Este documento define las reglas de desarrollo del proyecto.

Todas las nuevas funcionalidades deben respetar estas convenciones.

---

# Filosofía

Siempre priorizar:

- Simplicidad.
- Legibilidad.
- Mantenibilidad.
- Escalabilidad.

Evitar soluciones complejas si una solución simple resuelve el problema.

---

# Arquitectura

```
src/
│
├── assets/
├── components/
├── context/
├── data/
├── hooks/
├── layout/
├── pages/
├── services/
├── styles/
└── utils/
```

---

# Organización de Componentes

## Regla

**Todo componente tendrá su propia carpeta.**

Ejemplo:

```
components/

dashboard/
    WorkoutCard/
        WorkoutCard.jsx
        WorkoutCard.css

exercises/
    ExerciseCard/
        ExerciseCard.jsx
        ExerciseCard.css

routines/
    RoutineCard/
        RoutineCard.jsx
        RoutineCard.css
```

No crear componentes directamente dentro de una carpeta.

❌ Incorrecto

```
components/
    exercises/
        ExerciseCard.jsx
```

✅ Correcto

```
components/
    exercises/
        ExerciseCard/
            ExerciseCard.jsx
            ExerciseCard.css
```

---

# Imports

Los imports siempre apuntarán al componente dentro de su carpeta.

Ejemplo

```jsx
import WorkoutCard from "../../components/dashboard/WorkoutCard/WorkoutCard";

import ExerciseCard from "../../components/exercises/ExerciseCard/ExerciseCard";
```

---

# Nombres

## Carpetas técnicas

Siempre minúsculas.

```
assets
components
context
data
hooks
layout
pages
services
styles
utils
```

---

## Componentes

Siempre PascalCase.

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

Siempre PascalCase.

```
Dashboard
Workout
Admin
Exercises
Routines
Students
```

Cada página tendrá su propia carpeta.

```
pages/

Dashboard/
    Dashboard.jsx

Workout/
    Workout.jsx
```

---

## Hooks

Siempre camelCase.

```
useWorkout.js
useStudents.js
useExercises.js
```

---

## Utilidades

Siempre camelCase.

```
formatTime.js
calculateProgress.js
```

---

## Data

Archivos en minúsculas.

```
workout.js
exercises.js
students.js
routines.js
```

---

# CSS

Cada componente tendrá su propio archivo CSS.

Ejemplo

```
WorkoutCard/
    WorkoutCard.jsx
    WorkoutCard.css
```

No utilizar CSS global salvo para estilos generales de la aplicación.

---

# Responsabilidad

Cada componente debe tener una única responsabilidad.

Ejemplo

WorkoutCard

Responsabilidad:

- Mostrar el entrenamiento del día.

No debe contener lógica de alumnos.

No debe contener lógica del panel administrador.

---

# Páginas

Una página organiza componentes.

No debe contener lógica compleja.

---

# Estado

Orden de prioridad:

1. Props
2. useState
3. Context API
4. Backend

No utilizar Redux hasta que realmente sea necesario.

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

fix: correct workout navigation

docs: update roadmap

style: improve dashboard layout

refactor: simplify exercise card
```

---

# Flujo de desarrollo

Cada funcionalidad seguirá este proceso:

```
Idea

↓

Diseño

↓

Componente

↓

Página

↓

Prueba

↓

Commit

↓

Push
```

No saltear pasos.

---

# Regla principal

Nunca crear componentes que todavía no sean utilizados.

Nunca crear funcionalidades por anticipado.

Construir únicamente lo necesario para el Sprint actual.

---

# Checklist antes de un Commit

- El proyecto compila.
- No existen errores.
- La funcionalidad funciona.
- El componente tiene una única responsabilidad.
- El código es legible.
- Los imports son correctos.
- La estructura respeta las convenciones del proyecto.
