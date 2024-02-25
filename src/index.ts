let mensaje: string = "Hola Mundo";

mensaje = "Chanchito feliz";

mensaje = "Chao mundo";

console.log(mensaje);
console.log(typeof []);

/**
 * -- Tipos en JS --
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * -- Tipos en Typescript --
 * any --- No usarlo de ser necesario
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 *
 * -- Tipos Inferidos --
 * Para esto no es necesario que le agreguemos un tipo de dato
 * siempre y cuando nosotros inicialicemos dicha variable, al hacer
 * esto, el tipo de dato se "infiere", como en el siguiente ejemplo:
 */

// Aseguramos que estas variables tengan un tipo de dato especifico.
let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;

// Funciones en TS
// Para cada funcion, es mejor definir siempre el tipo de dato de los parametros, inclusive con "any"
// Se puede desactivar en el archivo de configuracion el parametro "noImplicitAny" para que sea posible tener any como implicito en los parametros, pero esto NO SE RECOMIENDA.
function chanchitoFeliz(config: any) {
  return config;
}

// // Tipo inferido
// let miVariable // Si se deja sin inicializar, se infiere el tipo como "any"

// // Al tipo "any" puedes asignarle cualquier valor y puede ser cambiado por cualquier valor, el problema es que esto rompe el proposito de usar typescript
// miVariable = 42
// miVariable = "Chancho feliz"

// Arrays
let animales: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [32, 42, 52, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// animales.map(x => x.) // El autocompletado sugiere metodos de tipo de dato

// Tuplas
// Las tuplas NO EXISTEN EN JS, pero en Typescript estan implementadas
// Tupla es una variable que contiene un set de datos ORDENADOS
let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]];

// Enums
// Los Enums TAMPOCO EXISTEN EN JS, pero en TS si
// Los Enums son una lista de constantes enumeradas, las cuales pueden ser referenciadas en cualquier momento

// Sin Enums, tendriamos que definir las tallas de esta manera
// const chica = 's'
// const mediana = 'm'
// const grandee = 'l'
// const extragrande = 'xl'

// Con Enums, el nombre de la variable tiene que ser PascalCase
enum Talla {
  Chica = "S",
  Mediana = "M",
  Grande = "L",
  ExtraGrande = "XL",
}

const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

// Objetos en TS
type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: "Hola Mundo",
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: 'Siempre Viva',
    pais: 'Wakanda'
  }
};

// objeto.id = 42; No se puede cambiar, ya que es readonly
objeto.direccion.calle = "Newell Road"

console.log(objeto);
