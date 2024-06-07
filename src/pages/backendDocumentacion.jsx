import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BackendDocumentation = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Documentación del Backend</h1>     
            
            {/* Controladores */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Controladores</h2>
                
                {/* Usuarios */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Usuarios</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">UserList:</span> Obtiene una lista de todos los usuarios registrados en la base de datos.</li>
                        <li><span className="font-semibold">getUser:</span> Obtiene los detalles de un usuario específico por su nombre.</li>
                        <li><span className="font-semibold">getExistUser:</span> Verifica si un usuario con un correo electrónico específico ya existe en la base de datos.</li>
                        <li><span className="font-semibold">postUser:</span> Registra un nuevo usuario en la base de datos.</li>
                        <li><span className="font-semibold">putUser:</span> Actualiza los detalles de un usuario existente.</li>
                        <li><span className="font-semibold">putRolle:</span> Asigna un nuevo rol a un usuario mediante su correo electrónico.</li>
                        <li><span className="font-semibold">deleteMyUser:</span> Elimina el usuario actualmente autenticado.</li>
                        <li><span className="font-semibold">deleteUser:</span> Elimina un usuario específico por su ID.</li>
                        <li><span className="font-semibold">loginUser:</span> Inicia sesión de un usuario utilizando su correo electrónico y contraseña.</li>
                    </ul>
                </div>
                
                {/* Tareas */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Tareas</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">showTasks:</span> Obtiene una lista de todas las tareas, opcionalmente filtradas por nombre de proyecto.</li>
                        <li><span className="font-semibold">getTask:</span> Obtiene los detalles de una tarea específica por su nombre.</li>
                        <li><span className="font-semibold">postTask:</span> Crea una nueva tarea y la asigna a un proyecto específico.</li>
                        <li><span className="font-semibold">putTask:</span> Actualiza los detalles de una tarea existente.</li>
                        <li><span className="font-semibold">delTask:</span> Elimina una tarea específica por su nombre.</li>
                    </ul>
                </div>
                
                {/* Reuniones */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Reuniones</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">showReuniones:</span> Obtiene una lista de todas las reuniones, opcionalmente filtradas por nombre.</li>
                        <li><span className="font-semibold">postReunion:</span> Crea una nueva reunión con nombre, descripción, fecha de inicio y fecha de finalización.</li>
                        <li><span className="font-semibold">putReunion:</span> Actualiza los detalles de una reunión existente por su ID.</li>
                        <li><span className="font-semibold">delReunion:</span> Elimina una reunión específica por su ID.</li>
                    </ul>
                </div>
                
                {/* Proyectos */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Proyectos</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">showProject:</span> Obtiene una lista de todos los proyectos.</li>
                        <li><span className="font-semibold">getProject:</span> Obtiene los detalles de un proyecto específico por su nombre.</li>
                        <li><span className="font-semibold">postProject:</span> Crea un nuevo proyecto con nombre, descripción, estado, prioridad y correo electrónico del gerente.</li>
                        <li><span className="font-semibold">putProject:</span> Actualiza los detalles de un proyecto existente por su nombre.</li>
                        <li><span className="font-semibold">delProject:</span> Elimina un proyecto específico por su nombre.</li>
                    </ul>
                </div>
            </section>

            {/* Middlewares */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Middlewares</h2>
                
                {/* Validar Permiso */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">validarPermiso</h3>
                    <p className="text-lg text-gray-600">Valida el token de autorización en las solicitudes entrantes para verificar los permisos de acceso.</p>
                </div>
            </section>

            {/* Rutas */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Rutas</h2>
                
                {/* Usuarios */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Usuarios</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">/usuarios:</span> GET, POST, DELETE (requiere autenticación)</li>
                        <li><span className="font-semibold">/usuario/:nombre:</span> GET</li>
                        <li><span className="font-semibold">/usuario/existe:</span> GET</li>
                        <li><span className="font-semibold">/usuario:</span> PUT, DELETE (requiere autenticación)</li>
                        <li><span className="font-semibold">/login:</span> POST</li>
                    </ul>
                </div>
                
                {/* Tareas */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Tareas</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">/tasks:</span> GET, POST</li>
                        <li><span className="font-semibold">/task/:nombre:</span> GET, PUT, DELETE</li>
                    </ul>
                </div>
                
                {/* Reuniones */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Reuniones</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">/meetings:</span> GET, POST</li>
                        <li><span className="font-semibold">/meeting/:reunion_id:</span> PUT, DELETE</li>
                    </ul>
                </div>
                
                {/* Proyectos */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Proyectos</h3>
                    <ul className="list-disc ml-8 text-lg text-gray-600 space-y-2">
                        <li><span className="font-semibold">/proyectos:</span> GET, POST</li>
                        <li><span className="font-semibold">/proyecto/:nombre:</span> GET, PUT, DELETE</li>
                    </ul>
                </div>
            </section>

            {/* Configuración */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Configuración</h2>
                
                {/* Base de Datos */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Base de Datos</h3>
                    <p className="text-lg text-gray-600">Conexión a una base de datos MySQL utilizando variables de entorno para la configuración.</p>
                </div>
            </section>

            {/* Utilidades */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Utilidades</h2>
                
                {/* dateHelper.js */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">dateHelper.js</h3>
                    <p className="text-lg text-gray-600">Funciones para obtener la fecha y hora actual en el formato adecuado.</p>
                </div>
            </section>
            
            <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                    <Link to="/" className="text-white">Volver al inicio</Link>
                </Button>
            </div>
        </div>
    );
};

export default BackendDocumentation;
