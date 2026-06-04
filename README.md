# Simulación de semáforos

## Descripción del problema

El ejercicio consiste en simular un cruce de calles con cuatro semáforos: Norte, Sur, Este y Oeste.

El objetivo es que los semáforos cambien de forma coordinada y que nunca estén en verde al mismo tiempo las direcciones Norte-Sur y Este-Oeste.

## Lógica de la solución

La solución usa un ciclo de fases.

Cada fase define:

- Cuántos segundos dura.
- Qué color tiene cada semáforo.

El ciclo funciona así:

1. Norte y Sur en verde.
2. Norte y Sur en amarillo.
3. Todos en rojo.
4. Este y Oeste en verde.
5. Este y Oeste en amarillo.
6. Todos en rojo.

El archivo `trafficLogic.ts` contiene las fases y la función que calcula la siguiente fase. El hook `useTrafficController.ts` funciona como controlador central, usando un contador con `setTimeout` para cambiar automáticamente de fase.

## Representación gráfica

La interfaz muestra un contador y cuatro semáforos ubicados según su dirección.

Cada semáforo tiene tres luces: rojo, amarillo y verde. Según la fase actual, React actualiza el color encendido de cada semáforo en tiempo real.

## Enlaces
### Despliegue en GH-Pages
https://nduron03.github.io/ej-analisis/
