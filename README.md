# Linko - Fake Store

Proyecto creado con Create-React-App. Para verlo en el browser, clonar el repositorio a uno local corriendo el comando:

`git clone https://github.com/joefefs/linko-store.git`

Luego instalar las dependencias con el comando:

`yarn`

Al terminar, correr el comando `yarn start` para visualizar el App en el browser en [http://localhost:3000](http://localhost:3000)



## Acerca del proyecto

El proyecto ocupa 2 librerías externas: 

- React Router Dom para poder utilizar routeo a URLs distintas
- MUI, en expecífico el componente de Rating para el widget de Rating.

El resto del proyecto utiliza hooks como useState y useEffect para consumir el API y guardar la data en state. Los estilos css fueron escritos manualmente sin utilizar Sass ni style components ya que por las dimensiones pequeñas del app, era lo más sencillo.
