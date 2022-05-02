# Genie

El anteproyecto se encuentra en la rama anteproyecto.

Una plantilla con cronograma de las últimas fases se encuentra en el siguiente enlace. Está hecha para uso proprio para la ordenación de tareas a cumplir: https://docs.google.com/spreadsheets/d/1_v-Ega-wbCNjAaQTUOTAYNmLVTN03UMWS3dC4MFup_g/edit?usp=sharing

## Semana 1
- Instalación de dependencias para Ionic
- Creacción de pestañas para la página principal
- Diseño básico de las páginas iniciales de las pestañas
- Enrutamiento de páginas


## Semana 2
- Creaccíon de un borrador del componente Contacts que utiliza el componente "ion-list" y "ion-item"
- Creacion del componente Cardscomponent que utiiza "ion-cards"
- Cambio del entorno en máquina local para un contenedor de Docker
- Reordanamiento de páginas a nuevas carpetas y de la estructura de ficheros en general
- Creacción de subpestañas dentro de las pestañas anteriores principales


## Semana 3
- Nuevo servicio CardsService para el provimiento centralizado de los cards a las distintas páginas
- Cambio de la implementación de WhishesPage para utilización del servicio
- Nueva lógica y servicio para páginas WishesPages y Sent de la pestañas Cards
- Nuevo servicio ContactsXCards que cruza y provee datos de ambos servicios
- Lógica inicial para página de contactos
- Modificación de lógica en componente Grid para su reutilización
- Nueva página que al hacer click en un card se visualiza a cuales contactos ha sido enviado y sus respuestas
- Nueva página Answers en pestaña Contacts para visualizar para cada contacto las respuesta a un card
- Nueva funcionalidad de enviar un card a lista de contactos desde la vista de un card

## Semana 4
- Nueva funcionalidad de incluir contactos en lista propia
- Nueva funcionalidad de excluir contacto desde icono de papelera al lado del contacto
    -   modificado componente de listado de contactos para elegir si se muestra icono de papelera
- Modificado página ViewCard para mostrase el botón de Save al clicar en icono de editar
    - el editar es aprovechar los mismos datos de un card para crear otro, pues en realidad no se deberá editar
    un card como una característica decidida para el diseño de la app.
- Implementado iconos que representan Like y WishedList directamente en el component de card para las respectivas páginas y su funcionalidad de añadir a las respectivas listas
- Nueva funcionalidad de incluir el contacto en respuesta a la inclusión del mismo por el otro usuario
- Sustitución de la utilización del componente de slides de Ionic por el Swiper como recomendado por Ionic por su descontinuidad
    - https://ionicframework.com/docs/angular/slides
- Implementación de la lógica de los cards que son mostrado al usuario en la página Selection en acuerdo con el requisito del proyecto en que parte de dicha selección están los envíos de cards por sus contactos siempre anonimamente y otra parte cards aleatorios.
    - La misma selección no es mostrada otra vez al usuario y por lo tanto si el usuario haz click en actualizar una nueva lista será creada


## referencias
 - https://developer.mozilla.org/es/docs/Web/HTML/Element
 - https://developer.mozilla.org/es/docs/Web/HTML
 - https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes
 - https://docs.angular.lat/guide/interpolation
 - https://docs.angular.lat/guide/property-binding
 - https://docs.angular.lat/guide/architecture-components
 - https://ionic.io/ionicons?_gl=1*qil8a2*_ga*MjA5ODUzMjc2NC4xNjM4NDgzMjU3*_ga_REH9TJF6KF*MTY0MDI3ODAyMC4yMy4xLjE2NDAyNzgxMDAuMA..
 - https://ionicframework.com/docs/angular/slides
 - https://ionicframework.com/docs/components
 - https://github.com/angular/angularfire
 - https://www.typescriptlang.org/pt/docs/handbook/
 - https://firebase.google.com/docs/auth/web/password-auth#web-version-9
