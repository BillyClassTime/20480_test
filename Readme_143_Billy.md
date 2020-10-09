# Create Custom Events

La parte mas importante de los eventos creados por el usuario son:

1 - Definer el evento con el objeto CustomEvent asi:

```javascript
event = new CustomEvent(typeArg, customEventInit);
```

2 - Poner a un elemento de la pagina (Un div, o cualquier otra etiqueta) a que escuche el evento: (***target*** es la referencia a la etiqueta)

```javascript
target.addEventListener(type, listener [, options]);
target.addEventListener(type, listener [, useCapture]);
target.addEventListener(type, listener [, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only
```

3 - Cuando queramos "disparar" el evento utilizaremos el disparador o distpachEvent:

```javascript
cancelled = !target.dispatchEvent(event)
```

### Pregunta 143

En esta pregunta simulamos un escenario donde despues de llamar a un Ajax disparamos un evento para recuperar la información recibida y actualizar una etiqueta. Es decir se llaman a unos servicios web que devuelven ordenes de pedido, y cuando sean recibidos actualizaremos la información.

Vemos los tres pasos para crear eventos configurados por el usuario: Lineas 19 y 20 y 33; En las primeras se recoge la referencia a la etiqueta (19) y luego ponemos a una funcion para que sea la que este escuchando cuando el evento se dispare (20).

```javascript
var ordersListing = document.getElementById("ordersListing");
ordersListing.addEventListener("ordersReceived", showOrdersReceivedCount);
```

En la linea 47,48 y 49 definimos la funcion: (Esto no es parte de la respuesta a la pregunta, se pone aquí para entender el escenario)

```javascript
function showOrdersReceivedCount(data) {
	document.getElementById("mostrarOrdenes").innerText += data.detail.orderCount;
}
```

Note que el parametro a recibir es parte del evento configurado por el usuario.

En este escenario, en el mismo momento se realizan la creación del evento y la acción de disparar el evento: Linea 33: Note que en  ***dispatchEvent***  estamos pasando el ***new CustomEvent***.

```javascript
ordersListing.dispatchEvent(new CustomEvent("ordersReceived", {
    detail: {
    	orderCount: 5
    },
    bubbles: false,
    cancelable: true
    }));
```

Parte de la sintaxis de la creación de eventos es **detail**, que es opcional pero que forma parte del diccionario de iniciación de eventos configurados por el usuario.

### Escenario de la pregunta 143


Se ha de crear una aplicación HTML5 que incluye JavaScript. La aplicación realiza varias solicitudes AJAX.
Una solicitud AJAX recupera la información del pedido de un servicio web y luego envía la información a una
página web dentro de la aplicación.
Se debe crear un evento personalizado. Tienes los siguientes requisitos:

1. La página web debe contener un elemento HTML llamado ordersListing que recibirá la notificación del evento personalizado.
2. El nombre del evento debe ser ordersReceived.
3. El evento debe pasar un valor personalizado llamado orderCount.
4. El evento debe ejecutar un método JavaScript llamado showOrdersReceivedCount después de que el elemento
   HTML del listado de pedidos reciba el evento.
5. No permita que otros elementos DOM reciban el evento.
6. Permita que se cancele el evento.
7. Envíe el evento al sistema de eventos.

Debe implementar el evento personalizado para notificar elementos DOM específicos de la respuesta AJAX.
¿Qué tres bloques de código debería utilizar para desarrollar la solución?

### Explicación del PDF de la batería de preguntas (Inglés)

* From Scenario: Do not allow other DOM elements to receive the event. So: bubbles: false 

* From scenario: Allow the event to be cancelled. So: cancellable: true 
* From scenario: The webpage must contain an HTML element named ordersListing that will receive the custom event notification. 
* Events which are designated as bubbling will initially proceed with the same event flow as non-bubbling events. The event is dispatched to its target EventTarget and any event listeners found there are triggered. Bubbling events will then trigger any additional event listeners found by following the EventTarget's parent chain upward, checking for any event listeners registered on each successive EventTarget. This upward propagation will continue up to and including the Document. EventListeners registered as capturers will not be triggered during this phase. The chain of EventTargets from the event target to the top of the tree is determined before the initial dispatch of the event. If modifications occur to the tree during event processing, event flow will proceed based on the initial state of the tree. 

**Note:** 

* Ajax (an acronym for Asynchronous JavaScript and XML) is a group of interrelated web development techniques used on the client-side to create asynchronous web applications. With Ajax, web applications can send data to, and retrieve data from, a server asynchronously (in the background) without interfering with the display and behavior of the existing page. Data can be retrieved using the XMLHttpRequest object. Despite the name, the use of XML is not required (JSON is often used instead), and the requests do not need to be asynchronous.