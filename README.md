# typescript

### Introduccion a Typescript

# Introduccion

Typescript es JS pero con tipado estático

### Beneficios:

- Entregarle el código al compilador
- Mensajes de error en tiempo real

Typescript por si solo no es entendible para navegadores ni para NodeJS, por ende, es necesario
"transpilar" el código (no confundir con compilar).

# Transpilación VS Compilación
Los archivos typescript se guardan con extensión .ts, estos archivos deben de ser pasados al
compilador como archivos .tsc, los cuales van a ser traducidos a código escrito en JS. Este
último proceso se llama Transpilación.

La compilación es tomar el código escrito en un lenguaje y lo transformamos a otro a un nivel
de abstracción similar. La transpilación por el contrario, es un subconjunto de compilación, es decir,
el código de Typescript va a ser pasado a Javascript, para que este pueda ser entendido por el navegador
o por NodeJS, ya que, en escencia, son el mismo lenguaje.

# Desventajas de usar Typescript
- Sentirás que el lenguaje se "está metiendo" en tu camino, en especial si eres novato.
- No verás el beneficio hasta que el proyecto empiece a crecer
- Mucho de los errores son por tipo de dato y son dificiles de encontrar

# Ventajas de usar Typescript
- Trabaja mucho mejor con proyectos en crecimiento o ya escalados.