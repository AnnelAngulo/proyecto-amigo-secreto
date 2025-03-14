# APP AMIGO SECRETO
<h1>Manual para el usuario:</h1>

Esta es una aplicación que te permite sortear un nombre al azar de los ingresados para participar en la dinámica de "Amigo secreto" muy utilizado en intercambios de regalos, sin embargo la funcionalidad del programa permite tener varios usos como para sortear quien expone primero un tema, en juegos de mesa puede determinar quien comienza la ronda o quien se lleva el botín más grande, etc.

Si te interesa explorarlo sigue los siguientes pasos:
1. Descarga el repositorio, extráe los documentos y guárdalos en tu PC local.
2. Si deseas visualizar o hacer cambios en el código abre el archivo llamado "app".
3. Si sólo deseas interactuar/ hacer uso de la aplicación abre con tu navegador de confianza el archivo llamado "index".

<h2>Instrucciones de uso de la app:</h2>
1. ABRE LA APLICACIÓN EN TU NAVEGADOR.

![image](https://github.com/user-attachments/assets/395e78d4-6904-4fd9-8403-d0baaa691be5)
2. INGRESA LOS NOMBRES DE LOS PARTICIPANTES EN LA DINÁMICA. DA CLICK EN "Añadir" PARA QUE SE VAYAN REGISTRANDO LOS NOMBRES.
Te recomiendo agregar un segundo nombre si hay participantes que se llaman igual como para diferenciar a quien hace alución el juego.
![image](https://github.com/user-attachments/assets/1ced4614-eacb-4b04-b7a3-1aaa0f30d4e7)

3. UNA VEZ INGRESADOS LOS NOMBRES DA CLICK EN EL BOTÓN "Sortear amigo".
   ![image](https://github.com/user-attachments/assets/6fd5c97b-cbba-45e0-9000-bf454c9bec9f)

4.EL PROGRAMA TE ARROJARÁ UN NOMBRE AL AZAR DE ENTRE LOS INGRESADOS. 
![image](https://github.com/user-attachments/assets/a9cfc569-5ecf-47d5-87b8-a39817100179)

5. SI DESEAS CONTINUAR LA DINÁMICA CON OTRO GRUPO DE NOMBRES DA CLICK EN EL BOTÓN "Reiniciar lista".
   ![image](https://github.com/user-attachments/assets/a9ee9898-d945-454a-aa73-04b37c467c6e)
6. LISTO! ESPERO TE SEA DE UTILIDAD. Si tienes algun comentario o sugerencia no dudes en contactarme.

# DESCRIPCIÓN DEL PROYECTO AMIGO SECRETO
# Para entender el código.
<h1>Introducción:</h1>
El objetivo de este proyecto fué crear una aplicación donde se puedan ingresar los nombres de los amigos que participarán en la dinámica de “Amigo secreto” y asignar de manera aleatoria un nombre para poner en práctica los conocimientos básicos de Lógica de Programación. Cabe destacar que el lenguaje de programación que se utilizó fue Java Script por lo que todos los ejemplos aca visualizados hacen referencia a eso.

Se partió de una app base que mostraba el estilo predeterminado y una configuración de elementos visibles como botones y campos de texto que aun no podían ser usados por el usuario pues carecía de código. De esta forma se procedió a trabajar en Visual Studio Code para configurar algunas funciones.
![image](https://github.com/user-attachments/assets/840ee795-f76c-4f27-ba51-3a1f13d60ef8)

<h1>Procedimiento:</h1>
Se instaló la extensión "Live Preview" en VS para poder observar de forma visual la configuración del código html desde la consola. De esta forma se identificó las etiquetas "id" de los elementos que me interesaban conectar con el código JS.

![image](https://github.com/user-attachments/assets/30d7c3eb-6753-4f1f-ba12-19939fe94aa4)
<h2>Crear lista:</h2>
Se busca ingresar varios "nombres de amigos" y que estos se almacenen y se visualicen en pantalla por lo que se partió creando un array.

![image](https://github.com/user-attachments/assets/089e5476-f53d-4c75-9483-861b9eb6fef7)
<h2>Función para agregar amigos:</h2>
Se implementó una función (imágen inferior) que permita al usuario ir agregando nombres en el campo de texto y almacenarlo en la lista creada anteriormente. 

![image](https://github.com/user-attachments/assets/ad1ecabb-42d0-4d63-9cb6-279d7ba6146d)
Se agregó una alerta que notifique al usuario que no se puede ingresar un campo vacío. 
![image](https://github.com/user-attachments/assets/4ebf9cc3-57d1-418b-b30a-aa7298efa149)
Posteriormente se creó una función para que los nombres agregados puedan ser visualizados por el usuario en el espacio de resultados. 
![image](https://github.com/user-attachments/assets/c92b540e-a96f-4596-b295-b862087664e0)
De esta forma, la app se visualiza de esta forma:
![image](https://github.com/user-attachments/assets/c148378b-e098-4f6a-80f3-638af61864b6)
Se implementó una función para sortear un nombre de los ingresados en la lista de amigos y asi obtener un resultado de amigo secreto.
![image](https://github.com/user-attachments/assets/6f5e9e91-de28-4557-a547-158b7029c8fd)
![image](https://github.com/user-attachments/assets/63e6e6bf-6dca-4e78-8e11-8007a8520cf3)


<h2>Botón adicional:</h2>
Se añadió un botón adicional al proyecto de la app base con la finalidad de implementar lo aprendido hasta el momento de HTML y para poder darle mejor experiencia al usuario cuya función sea reiniciar el juego y regresar a las condiciones iniciales de forma más rápida en lugar de volver a cargar la página.

![image](https://github.com/user-attachments/assets/10495393-3af8-4ae8-a94e-e26182e38998)

Para esto se identificó la sección de código HTML que indica la expresión de botón (sección sin subrayar de la imágen inferior). Se replicó dicho código modificando el nombre de las etiquetas correspondientes para crear una nuevaLista() como "Reiniciar lista" y "id="Reiniciar" (sección subrayada vista de la imágen inferior).

![image](https://github.com/user-attachments/assets/9091f66c-33eb-4c0b-a9f3-278fad48981f)
Posteriormente se implementó una función para la usabilidad de este nuevo botón de "Reinicio".
![image](https://github.com/user-attachments/assets/57b3fed3-0efe-436f-b131-47b4ffd63181)
Con estos cambios la aplicación ya cumple con los objetivos iniciales del proyecto.

<h1>Conclusiones:</h1>
Este proyecto me permitió aplicar los fundamentos de lógica de programación, usar varias herramientas como SOURCETREE, GIT, GITHUB, VISUAL STUDIO CODE y comprender la relación entre estos, asi como a valorar más todo los procesos mentales complejos que hay detrás de los programas que usamos y que nos facilitan la vida. Es posible que haya futuras mejoras al programa como la posibilidad de crear parejas entre los nombres añadidos o bien no permitir que se repitan los nombres que ya salieron sorteados. Puede que sea un proyecto simple pero sin duda sienta las bases y la confianza para tomar retos más complejos.

<h2>Autor:</h2> Annel Angulo Calleros
