import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const FrontendDocumentation = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Frontend
      </h1>

      {/* Estructura del Proyecto */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Estructura del Proyecto
        </h2>

        {/* Public Folder */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Public Folder
          </h3>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">index.html:</span> Archivo
              principal HTML donde se monta la aplicación de React.
            </li>
            <li>
              <span className="font-semibold">style.css:</span> Archivo CSS
              global para la aplicación.
            </li>
          </ul>
        </div>

        {/* src Folder */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            src Folder
          </h3>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">pages:</span> Carpeta que contiene
              los componentes de las páginas principales como `CreateAcount`,
              `Loggin`, y `Page404`.
            </li>
            <li>
              <span className="font-semibold">view-manager:</span> Carpeta que
              contiene los componentes y rutas del dashboard principal
              (`DashBoard` y `MainDash`).
            </li>
          </ul>
        </div>
      </section>

      {/* Componentes */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Componentes
        </h2>

        {/* Componente CreateAcount */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            CreateAcount
          </h3>
          <p className="text-lg text-gray-600">
            Componente para registrar un nuevo usuario.
          </p>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">useState:</span> Maneja el estado
              del formulario y los mensajes de error.
            </li>
            <li>
              <span className="font-semibold">handleChange:</span> Actualiza el
              estado del formulario a medida que el usuario ingresa datos.
            </li>
            <li>
              <span className="font-semibold">handleSave:</span> Envía los datos
              del formulario al backend para registrar un nuevo usuario y maneja
              la navegación basada en la respuesta.
            </li>
          </ul>
        </div>

        {/* Componente Loggin */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Loggin</h3>
          <p className="text-lg text-gray-600">
            Componente para iniciar sesión.
          </p>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">useState:</span> Maneja el estado
              de los campos de email y contraseña, así como los mensajes de
              error.
            </li>
            <li>
              <span className="font-semibold">handleLogin:</span> Envía los
              datos de inicio de sesión al backend, guarda el token en cookies,
              y navega al dashboard en caso de éxito.
            </li>
          </ul>
        </div>

        {/* Componente DashBoard */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            DashBoard
          </h3>
          <p className="text-lg text-gray-600">
            Componente principal del dashboard con navegación y gestión de
            temas.
          </p>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">useState:</span> Maneja el estado
              de varias funcionalidades del dashboard como el menú de
              configuración y el tema.
            </li>
            <li>
              <span className="font-semibold">useEffect:</span> Configura
              eventos de teclado para accesos directos, controla el temporizador
              de sesión y el tema de la página.
            </li>
            <li>
              <span className="font-semibold">handleLogout:</span> Elimina el
              token de sesión y redirige al usuario a la página de inicio.
            </li>
            <li>
              <span className="font-semibold">handleDeleteAccount:</span>{" "}
              Elimina la cuenta del usuario tras confirmar la acción.
            </li>
          </ul>
        </div>
      </section>

      {/* Rutas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Rutas</h2>

        {/* Rutas del DashBoard */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Rutas del DashBoard
          </h3>
          <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">/dash-manager/calendario:</span>{" "}
              Muestra el componente `Calendario`.
            </li>
            <li>
              <span className="font-semibold">/dash-manager/listausuario:</span>{" "}
              Muestra el componente `ShowUsers`.
            </li>
            <li>
              <span className="font-semibold">/dash-manager/asignarrol:</span>{" "}
              Muestra el componente `AsignarRango`.
            </li>
            <li>
              <span className="font-semibold">/dash-manager/proyectos:</span>{" "}
              Muestra el componente `Proyectos`.
            </li>
            <li>
              <span className="font-semibold">
                /dash-manager/tareas/:proyectoNombre:
              </span>{" "}
              Muestra el componente `Tareas`.
            </li>
          </ul>
        </div>
      </section>
      <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Calendario
      </h3>

      {/* Descripción del Calendario */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          ¿Qué es el Calendario?
        </h2>
        <p className="text-lg text-gray-600">
          El calendario es una herramienta interactiva que permite visualizar y
          gestionar tareas y reuniones. Proporciona una interfaz intuitiva para
          crear, editar y eliminar eventos, así como también para navegar por
          diferentes vistas de tiempo.
        </p>
      </section>

      {/* Funcionalidades del Calendario */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Funcionalidades
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Visualización de eventos:</span>{" "}
            Permite ver tareas y reuniones en diferentes días, semanas y meses.
          </li>
          <li>
            <span className="font-semibold">Creación de eventos:</span> Permite
            añadir nuevas tareas y reuniones al calendario.
          </li>
          <li>
            <span className="font-semibold">Edición de eventos:</span> Facilita
            la modificación de detalles de tareas y reuniones existentes.
          </li>
          <li>
            <span className="font-semibold">Eliminación de eventos:</span>{" "}
            Permite eliminar tareas y reuniones del calendario.
          </li>
          <li>
            <span className="font-semibold">Navegación:</span> Permite cambiar
            entre diferentes vistas de tiempo, como día, semana y mes.
          </li>
        </ul>
      </section>

      {/* Ejemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ejemplo de Uso
        </h2>
        <p className="text-lg text-gray-600">
          A continuación se muestra un ejemplo de cómo se puede utilizar el
          calendario en una aplicación web:
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 my-4 text-gray-800">
          {`import React from 'react';
import Calendario from './Calendario';

const App = () => {
return (
<div>
<h1>¡Bienvenido a mi aplicación!</h1>
<Calendario />
</div>
);
};

export default App;`}
        </pre>
        <p className="text-lg text-gray-600">
          Este ejemplo importa el componente <code>Calendario</code> y lo
          renderiza dentro de una aplicación React.
        </p>
      </section>

      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Componente ShowUsers
      </h1>

      {/* Descripción del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Descripción del Componente
        </h2>
        <p className="text-lg text-gray-600">
          El componente <code>ShowUsers</code> se encarga de mostrar una lista
          de usuarios, permitir la búsqueda de usuarios por nombre y eliminar
          usuarios de la lista. Utiliza <code>axios</code> para realizar
          peticiones HTTP a una API y <code>js-cookie</code> para manejar tokens
          de autenticación.
        </p>
      </section>

      {/* Funcionalidades del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Funcionalidades
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Mostrar Usuarios:</span> Obtiene y
            muestra una lista de usuarios desde la API.
          </li>
          <li>
            <span className="font-semibold">Buscar Usuario:</span> Permite
            buscar un usuario específico por nombre.
          </li>
          <li>
            <span className="font-semibold">Eliminar Usuario:</span> Proporciona
            la funcionalidad para eliminar un usuario de la lista.
          </li>
        </ul>
      </section>

      {/* Ejemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ejemplo de Uso
        </h2>
        <p className="text-lg text-gray-600">
          A continuación se muestra un ejemplo de cómo se puede utilizar el
          componente <code>ShowUsers</code> en una aplicación React:
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 my-4 text-gray-800">
          {`import React from 'react';
import ShowUsers from './ShowUsers';

const App = () => {
return (
<div>
<h1>Gestión de Usuarios</h1>
<ShowUsers />
</div>
);
};

export default App;`}
        </pre>
        <p className="text-lg text-gray-600">
          Este ejemplo importa el componente <code>ShowUsers</code> y lo
          renderiza dentro de una aplicación React, proporcionando un entorno
          completo de gestión de usuarios.
        </p>
      </section>

      {/* Detalles Técnicos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Detalles Técnicos
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Estado y Efectos:</span> Utiliza{" "}
            <code>useState</code> para manejar el estado de los usuarios, la
            búsqueda, y la visibilidad de las opciones de eliminación. Utiliza{" "}
            <code>useEffect</code> para cargar los usuarios al montar el
            componente.
          </li>
          <li>
            <span className="font-semibold">Manejo de Errores:</span> Incluye
            manejo de errores para mostrar mensajes adecuados cuando ocurren
            problemas al obtener o eliminar usuarios.
          </li>
          <li>
            <span className="font-semibold">Autenticación:</span> Utiliza
            cookies para manejar el token de autenticación y proteger las rutas
            de la API.
          </li>
          <li>
            <span className="font-semibold">Navegación:</span> Utiliza{" "}
            <code>useNavigate</code> de <code>react-router-dom</code> para
            redirigir al usuario en ciertos casos, como después de eliminar su
            propia cuenta.
          </li>
        </ul>
      </section>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Componente Tareas
      </h1>

      {/* Descripción del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Descripción del Componente
        </h2>
        <p className="text-lg text-gray-600">
          El componente <code>Tareas</code> permite la gestión de tareas en un
          proyecto. Incluye funcionalidades para mostrar, crear y actualizar
          tareas, así como un sistema de roles que determina qué acciones puede
          realizar cada usuario.
        </p>
      </section>

      {/* Funcionalidades del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Funcionalidades
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Mostrar Tareas:</span> Muestra una
            lista de tareas utilizando el componente <code>ShowTasks</code>.
          </li>
          <li>
            <span className="font-semibold">Crear Tarea:</span> Abre un modal
            para crear una nueva tarea utilizando el componente{" "}
            <code>CreateTask</code>.
          </li>
          <li>
            <span className="font-semibold">Actualizar Tarea:</span> Abre un
            modal para actualizar una tarea existente utilizando el componente{" "}
            <code>UpdateTask</code>.
          </li>
          <li>
            <span className="font-semibold">Roles de Usuario:</span> Determina
            las acciones permitidas basadas en el rol del usuario.
          </li>
        </ul>
      </section>

      {/* Ejemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ejemplo de Uso
        </h2>
        <p className="text-lg text-gray-600">
          A continuación se muestra un ejemplo de cómo se puede utilizar el
          componente <code>Tareas</code> en una aplicación React:
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 my-4 text-gray-800">
          {`import React from 'react';
import Tareas from './Tareas';

const App = () => {
return (
<div>
<h1>Gestión de Tareas</h1>
<Tareas />
</div>
);
};

export default App;`}
        </pre>
        <p className="text-lg text-gray-600">
          Este ejemplo importa el componente <code>Tareas</code> y lo renderiza
          dentro de una aplicación React, proporcionando un entorno completo de
          gestión de tareas.
        </p>
      </section>

      {/* Detalles Técnicos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Detalles Técnicos
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Estado y Efectos:</span> Utiliza{" "}
            <code>useState</code> para manejar el estado del modal, el contenido
            del modal, la apertura de la barra lateral y el rol del usuario.
            Utiliza <code>useEffect</code> para cargar el rol del usuario al
            montar el componente.
          </li>
          <li>
            <span className="font-semibold">Autenticación:</span> Utiliza
            cookies para manejar el token de autenticación y determinar el rol
            del usuario.
          </li>
          <li>
            <span className="font-semibold">Modales:</span> Implementa un
            sistema de modales para crear y actualizar tareas.
          </li>
        </ul>
      </section>

      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Componente ShowUsers
      </h1>

      {/* Descripción del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Descripción del Componente
        </h2>
        <p className="text-lg text-gray-600">
          El componente <code>ShowUsers</code> se encarga de mostrar una lista
          de usuarios, permitir la búsqueda de usuarios por nombre y eliminar
          usuarios de la lista. Utiliza <code>axios</code> para realizar
          peticiones HTTP a una API y <code>js-cookie</code> para manejar tokens
          de autenticación.
        </p>
      </section>

      {/* Funcionalidades del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Funcionalidades
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Mostrar Usuarios:</span> Obtiene y
            muestra una lista de usuarios desde la API.
          </li>
          <li>
            <span className="font-semibold">Buscar Usuario:</span> Permite
            buscar un usuario específico por nombre.
          </li>
          <li>
            <span className="font-semibold">Eliminar Usuario:</span> Proporciona
            la funcionalidad para eliminar un usuario de la lista.
          </li>
        </ul>
      </section>

      {/* Ejemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ejemplo de Uso
        </h2>
        <p className="text-lg text-gray-600">
          A continuación se muestra un ejemplo de cómo se puede utilizar el
          componente <code>ShowUsers</code> en una aplicación React:
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 my-4 text-gray-800">
          {`import React from 'react';
import ShowUsers from './ShowUsers';

const App = () => {
return (
<div>
<h1>Gestión de Usuarios</h1>
<ShowUsers />
</div>
);
};

export default App;`}
        </pre>
        <p className="text-lg text-gray-600">
          Este ejemplo importa el componente <code>ShowUsers</code> y lo
          renderiza dentro de una aplicación React, proporcionando un entorno
          completo de gestión de usuarios.
        </p>
      </section>

      {/* Detalles Técnicos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Detalles Técnicos
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Estado y Efectos:</span> Utiliza{" "}
            <code>useState</code> para manejar el estado de los usuarios, la
            búsqueda, y la visibilidad de las opciones de eliminación. Utiliza{" "}
            <code>useEffect</code> para cargar los usuarios al montar el
            componente y para obtener el rol del usuario.
          </li>
          <li>
            <span className="font-semibold">Manejo de Errores:</span> Incluye
            manejo de errores para mostrar mensajes adecuados cuando ocurren
            problemas al obtener o eliminar usuarios.
          </li>
          <li>
            <span className="font-semibold">Autenticación:</span> Utiliza
            cookies para manejar el token de autenticación y proteger las rutas
            de la API.
          </li>
          <li>
            <span className="font-semibold">Navegación:</span> Utiliza{" "}
            <code>useNavigate</code> de <code>react-router-dom</code> para
            redirigir al usuario en ciertos casos, como después de eliminar su
            propia cuenta.
          </li>
        </ul>
      </section>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Documentación del Componente AsignarRango
      </h1>

      {/* Descripción del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Descripción del Componente
        </h2>
        <p className="text-lg text-gray-600">
          El componente <code>AsignarRango</code> permite asignar roles a
          usuarios existentes. Utiliza <code>axios</code> para realizar
          peticiones HTTP a una API y <code>js-cookie</code> para manejar tokens
          de autenticación.
        </p>
      </section>

      {/* Funcionalidades del Componente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Funcionalidades
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Asignar Rol:</span> Permite asignar
            un rol a un usuario especificando su correo electrónico y el nuevo
            rol.
          </li>
        </ul>
      </section>

      {/* Ejemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ejemplo de Uso
        </h2>
        <p className="text-lg text-gray-600">
          A continuación se muestra un ejemplo de cómo se puede utilizar el
          componente <code>AsignarRango</code> en una aplicación React:
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 my-4 text-gray-800">
          {`import React from 'react';
import AsignarRango from './AsignarRango';

const App = () => {
return (
<div>
<h1>Asignar Roles</h1>
<AsignarRango />
</div>
);
};

export default App;`}
        </pre>
        <p className="text-lg text-gray-600">
          Este ejemplo importa el componente <code>AsignarRango</code> y lo
          renderiza dentro de una aplicación React, proporcionando una interfaz
          para asignar roles a los usuarios.
        </p>
      </section>

      {/* Detalles Técnicos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Detalles Técnicos
        </h2>
        <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Estado:</span> Utiliza{" "}
            <code>useState</code> para manejar el estado del formulario y los
            mensajes de respuesta.
          </li>
          <li>
            <span className="font-semibold">Manejo de Errores:</span> Incluye
            manejo de errores para mostrar mensajes adecuados cuando ocurren
            problemas al actualizar el rol del usuario.
          </li>
          <li>
            <span className="font-semibold">Autenticación:</span> Utiliza
            cookies para manejar el token de autenticación y proteger las rutas
            de la API.
          </li>
        </ul>
      </section>

      <div className="flex justify-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
          <Link to="/" className="text-white">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FrontendDocumentation;
