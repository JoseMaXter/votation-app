# Doc de app-votation

## Pasos para hacer una votación via fronted

-  1. Introducir tu nombre y cedúla en el formulario
-  2. Elegir el presidente
-  3. Elegir el senador
-  4. Y por ultimo elegir el regidor

## Pasos para hacer una votación via api

Para hacer una votación se usa la misma function, solo que en el body de la function se le pasa un campo llamado votationType, este campo puede tener tres valores: 'President' | 'Senator' | 'Councilor'.

Los parametros que esta funcion recibe por JSON son los siguientes.

-  votationType: 'President' | 'Senator' | 'Councilor'
-  userName: string (Nombre del usuario)
-  userIdentity: string (Cedúla del usuario)
-  userVotation: string (Candidato seleccionado)

## Seguridad

Con fin de prueba no le agregue la correcta seguridad a las funciones, osea todas las funciones son accesibles, esto se configura por medio de los cors,
pero actualmente no tiene ninguna restricciòn.

## Base de datos

Este proyecto usa una unica tabla llamada: Votations.

## Escalabilidad

Considero que la escalbilidad y las futuras mejoras en este proyecto no serian de mucha complicaciòn debido a la forma de construccciòn de este.
Ya que todos los registros de las votaciones se guardan en una sola tabla, lo que harìa muy facil hacer consultas agrupando datos para mostrar informaciòn
mas detallada acerca de las votaciones. El fronted que consume este proyecto esta desarollado con next.js, lo que permite la facil creaciion de paginas
y componentes de este mismo sistema, teniendo en cuanta que las candidatos se guardan en un array y para agregar otro solo se tendria que agregar
al array sin tener que tocar el codigo html.
