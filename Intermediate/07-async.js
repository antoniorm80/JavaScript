// Programación Asíncrona.

// Código Síncrona.

console.log("inicio");

for (let i = 0; i < 100000; i++) {}

console.log("Fin");

// Event Loop (Bucle de eventos)

// Componentes del Event Loop
// 1.- Call Stack (Pila de ejecución)
// 2.- Web APIs (APIs del navegador) o Node.js
// 3.- Task Queue (Cola de tareas)

// Flujo de Event Loop:
// 1.- Call Stack
// 2.- Operaciones asíncrons -> Web APIs o Node.js
// 3.- Operación termina -> la coloca en Task Queue o Microtask Queue
// 4.- Si Call Stack varí  Mueve tares del Microstacks quie o  tasl Quier all call stacks
// 5.- El proceso se repite

console.log("start");

setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("finish");

// - Problema: Callback Hell

function step1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 1000);
}

step1(() => {
  console.log("Todos los pasos completados");
});

// - Promesas
const promesa = new Promise((resolve, reject) => {
  setInterval(() => {
    const ok = true;
    if (ok) {
      resolve("Operación exitosa");
    } else {
      reject("Se ha producido un error");
    }
  }, 3000);
});

promesa
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Siempre se ejecuta sea exitosos o falle");
  });

// - Encadenamiento de Promesas
function step1Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Paso 1 con promesa compeltada exitosa");
    }, 1000);
  });
}
function step2Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Paso 2 con promesa compeltada exitosa");
    }, 1000);
  });
}
function step3Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Paso 3 con promesa compeltada exitosa");
    }, 1000);
  });
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=> {
        console.log("Todos los pasos con promesa completados")
    })

    // - Async / Await

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

   async function proceso(){
        console.log("inicio del proceso")

        await wait(5000)
        console.log("Proceso despue´s de 5 segundos")
        
        await wait(1000)
        console.log("Proceso despue´s de 1 segundos")
        
        await wait(2000)
        console.log("Proceso despue´s de 2 segundos")

        console.log("Fin del proceso")
    }

    proceso()
