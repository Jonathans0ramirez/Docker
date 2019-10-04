# Docker

### ¿Qué es Docker?
> La idea de Docker es crear contenedores ligeros y portables con el objetivo de que las aplicaciones de software se puedan ejecutar en cualquier máquina independientemente del sistema operativo, facilitando en gran medida los despliegues

### **Beneficios**
> Docker está diseñado para beneficiar a los desarrolladores, testers y administradores de sistemas.

> En el caso de los desarrolladores, Docker les ahorra la preocupación de la compatibilidad entre dispositivos, permitiéndoles que se centren solamente en desarrollar su código.

## Consumo API Student

La ruta raíz de la API es `/student`

### ¿Cómo empezar a consumirla?

* Como primer paso se debe abrir una terminal en el directorio `api` y ejecutar preferiblemente: 
    * `docker-compose build` → `docker-compose up`
    
### Endpoints

* `/student` para obtener la colección correspondiente a los estudiantes
* `/student/add` para agregar un nuevo estudiante
* `/student/:id` para obtener el registro de un estudiante en específico
* `/student/update/:id` para actualizar el registro de un estudiante específico
* `/student/delete/:id` para eliminar el registro de un estudiante específico


#### Avance - Endpoint
* `/student/average/:course_code` primer acercamiento para calcular el promedio de notas de un curso específico
