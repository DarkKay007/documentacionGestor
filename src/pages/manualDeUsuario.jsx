import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserManual = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-blue-600 text-white py-4 mb-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Manual de Usuario</h1>
                    <h2 className="text-2xl mt-2">Gestor de Proyectos (Kuro)</h2>
                    <p>Juan J. Higuita López, Omar E. Pérez Peña, Miguel A. Taborda Franco</p>
                    <p className="text-lg mt-2">Técnica en Programación de Software 2842515, Centro de Diseño y Manufactura del Cuero. Servicio Nacional de Aprendizaje; Itagüí</p>
                    <p className="mt-2">La Estrella, 2023</p>
                </div>
            </header>

            <main className="container mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Tabla de Contenido</h2>
                    <ul className="list-disc ml-5">
                        <li>Presentación</li>
                        <li>Objetivo</li>
                        <li>Introducción</li>
                        <li>Conocimientos Básicos</li>
                        <li>Requisitos básicos del sistema</li>
                        <li>Interfaz de Usuario</li>
                        <li>Preguntas Frecuentes</li>
                        <li>Cuadro Error Solución</li>
                        <li>Glosario</li>
                    </ul>
                </section>
    <section className="mb-12">
    <h2 className="text-3xl font-semibold mb-4">Requerimientos</h2>
    <ul className="list-disc ml-5 text-lg text-gray-700">
        <li>01. El sistema debe permitir a los usuarios registrar una cuenta.</li>
        <li>02. El sistema debe permitir a los usuarios eliminar su cuenta fácilmente.</li>
        <li>03. El sistema debe permitir a los usuarios iniciar sesión con sus credenciales.</li>
        <li>04. El sistema debe permitir a los usuarios cerrar su sesión de modo que se elimine su token.</li>
        <li>05. El sistema debe permitir a los usuarios ver todos los usuarios con cuenta.</li>
        <li>06. El sistema debe permitir a los usuarios buscar un usuario en específico.</li>
        <li>07. El sistema debe permitir al mánager asignar roles.</li>
        <li>08. El sistema debe permitir al mánager agregar proyectos.</li>
        <li>09. El sistema debe permitir al mánager buscar sus proyectos.</li>
        <li>10. El sistema debe permitir al mánager editar los detalles de un proyecto existente.</li>
        <li>11. El sistema debe permitir al mánager eliminar proyectos.</li>
        <li>12. El sistema debe permitir al mánager eliminar cuentas de usuarios.</li>
        <li>13. El sistema debe permitir al mánager y al administrador agregar una nueva tarea a un proyecto.</li>
        <li>14. El sistema debe permitir a los usuarios buscar tareas.</li>
        <li>15. El sistema debe permitir a los usuarios editar los detalles de una tarea existente.</li>
        <li>16. El sistema debe permitir al mánager y al administrador eliminar tareas existentes.</li>
        <li>17. El sistema debe permitir a los usuarios marcar una tarea como completada.</li>
        <li>18. El sistema debe permitir a los usuarios ver la fecha límite de cada tarea en el calendario.</li>
        <li>19. El sistema debe permitir al mánager y al administrador programar reuniones en el calendario.</li>
        <li>20. El sistema debe permitir al mánager y al administrador editar reuniones en el calendario.</li>
        <li>21. El sistema debe permitir al mánager y al administrador eliminar reuniones del calendario.</li>
        <li>22. El sistema debe permitir al mánager categorizar los proyectos por diferentes criterios, como estado o prioridad.</li>
        <li>23. El sistema debe permitir a los usuarios una interfaz intuitiva y fácil de usar.</li>
        <li>24. El sistema debe permitir a los usuarios coexistir entre y navegadores web.</li>
        <li>25. El sistema debe permitir a los usuarios garantizar la seguridad de los datos del usuario mediante medidas de cifrado y protección contra accesos no autorizados.</li>
        <li>26. El sistema debe permitir al usuario personalizar la apariencia y configuración por parte del usuario.</li>
        <li>27. El sistema debe permitir al usuario ofrecer integraciones con otras herramientas populares como calendarios y aplicaciones de mensajería instantánea.</li>
        <li>28. El sistema debe permitir al usuario moverse por las interfaces con atajos de teclado.</li>
        <li>29. El sistema debe permitir a los usuarios la colaboración en tiempo real entre los miembros del equipo en la edición de proyectos y tareas.</li>
        <li>30. El sistema debe permitir ser escalable para que se adapte a las necesidades del usuario.</li>
    </ul>
</section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Presentación</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        ¿Qué es Kuro? Kuro es una plataforma virtual especializada en la gestión de proyectos, diseñada para facilitar a los usuarios la planificación, organización y seguimiento de sus proyectos de manera eficiente y efectiva. Basada en código React, JS, HTML, CSS y con su base de datos alojada en db4free, Kuro es una herramienta idílica que promete transformar la manera en que gestionas tus proyectos.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Kuro no solo es un gestor de proyectos; es una experiencia de productividad integral creada para satisfacer las necesidades de profesionales, equipos y empresas de todos los tamaños. Nuestra plataforma ofrece una interfaz intuitiva y amigable, combinada con potentes funcionalidades que permiten una gestión de proyectos sin complicaciones. Ya sea que estés manejando un pequeño proyecto personal o coordinando una gran iniciativa empresarial, Kuro está diseñado para adaptarse a tus necesidades específicas.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Aparte, Kuro permite la integración de varios proyectos, adjuntarles sus respectivas tareas y usuarios para llevarlas a cabo, a su vez estructurada y diseñada para ser fácil de usar, permitiendo a los usuarios centrarse en sus tareas en lugar de en la tecnología.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Objetivo</h2>
                    <ul className="list-disc ml-5 text-lg text-gray-700">
                        <li>Instruir al usuario para facilitar el manejo de la plataforma</li>
                        <li>Mejorar la Experiencia del Usuario</li>
                        <li>Fomentar la Autonomía del Usuario</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Introducción</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Este manual está diseñado para proporcionarte una guía detallada sobre cómo sacar el máximo provecho de nuestra plataforma, Kuro. Ya sea que seas un nuevo usuario o estés buscando optimizar tu experiencia, este manual te llevará paso a paso a través de las funciones clave y las herramientas disponibles en nuestro sitio web.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Kuro ha sido creado con el objetivo de ofrecerte una experiencia intuitiva, informativa y satisfactoria. Desde la navegación básica hasta las funciones avanzadas, aquí encontrarás instrucciones claras y consejos útiles, e incluso imágenes detalladas, para ayudarte a navegar, interactuar y aprovechar al máximo todas las características que nuestra plataforma tiene para ofrecer.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Este manual está estructurado para brindarte una comprensión completa de cómo utilizar cada sección de la página, desde la creación de una cuenta hasta la gestión de perfiles, el acceso a contenidos exclusivos y la participación en comunidades interactivas. Con instrucciones detalladas, capturas de pantalla ilustrativas y sugerencias prácticas, te apoyará de gran manera para convertirte en un usuario experto en el uso de nuestra plataforma en poco tiempo para facilitar el uso y la comodidad a tu persona.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Conocimientos Básicos</h2>
                    <ul className="list-disc ml-5 text-lg text-gray-700">
                        <li>Utilizar un navegador web</li>
                        <li>Crear y gestionar cuentas de usuario en sitios web</li>
                        <li>Familiaridad con el uso del correo electrónico</li>
                        <li>Prácticas básicas de seguridad en línea</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Requisitos básicos del sistema</h2>
                    <ul className="list-disc ml-5 text-lg text-gray-700">
                        <li>Conexión a internet</li>
                        <li>Windows XP Service Pack 2 y versiones posteriores, Windows Vista, Windows 7, Windows 8</li>
                        <li>Mac OS X 10.6 y versiones posteriores</li>
                        <li>Procesador: Intel Pentium 4 o superior</li>
                        <li>Espacio en disco: 350 MB</li>
                        <li>Memoria RAM: 512 MB</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Interfaz de Usuario</h2>
                    {/* Add images and notes here */}
                    <p className="text-lg text-gray-700 mb-4">IMAGEN 1: ...</p>
                    <p className="text-lg text-gray-700 mb-4">NOTA: Este es el inicio de sesion principal de nuestra pagina oficial, al no tener una cuenta registrada vas al apartado de Crear Cuenta</p>
                    {/* Repeat similar blocks for each image and note */}
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h2>
                    <div className="text-lg text-gray-700 mb-4">
                        <p><strong className='text-gray-900 font-bold'>¿Está disponible para varios navegadores?</strong></p>
                        <p className='pl-5'>Sí, la página está diseñada para ser desplegada en distintos navegadores.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Cuántos miembros puedo asignar a un proyecto?</strong></p>
                        <p className='pl-5'>No hay ningún límite.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Puedo realizar cambios en el calendario?</strong></p>
                        <p className='pl-5'>Sí, puedes agregar, modificar o eliminar reuniones y muestra las tareas creadas.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Para eliminar cuenta pide algún tipo de confirmación?</strong></p>
                        <p className='pl-5'>Claro que sí y no solo en ese caso en todo lo relacionado a eliminar generará una alerta de confirmación.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Qué roles pueden eliminar usuarios?</strong></p>
                        <p className='pl-5'>Solamente Manager y Administrador pueden eliminar los usuarios.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Hay un límite de tareas?</strong></p>
                        <p className='pl-5'>No hay ningún límite.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Se puede acceder al dashboard principal sin estar logueado?</strong></p>
                        <p className='pl-5'>No puedes acceder a ningún apartado si no estás registrado o logueado.</p>
                        <p><strong className='text-gray-900 font-bold'>¿Cómo me desplazo por la página?</strong></p>
                        <p className='pl-5'>Después de iniciar sesión simplemente le das click al botón de arriba con el título de inicio y se desplegarán todas las funciones.</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Cuadro Error Solución</h2>
                    <table className="table-auto w-full text-lg text-gray-700 mb-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Error</th>
                                <th className="px-4 py-2">Solución</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Página lenta o no carga</td>
                                <td className="border px-4 py-2">Revise su conexión a internet, permisos del navegador o contacte a su operador</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">No inicia sesión</td>
                                <td className="border px-4 py-2">Revise los credenciales ingresados o puede crear otra cuenta</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">No me crea el proyecto</td>
                                <td className="border px-4 py-2">Completa todos los campos requeridos en el formulario o revise si ya hay un proyecto con ese nombre</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Se bloquean las funcionalidades por la eliminación del token</td>
                                <td className="border px-4 py-2">Tienes que cerrar sesión y volver a iniciar</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Cuenta eliminada</td>
                                <td className="border px-4 py-2">Verifique la razón de su eliminación con su líder de proyecto</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Glosario</h2>
                    <ul className="list-disc ml-5 text-lg text-gray-700">
                        <li><strong>HTML:</strong> HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.</li>
                        <li><strong>REACT:</strong> React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y permite crear aplicaciones web rápidas y dinámicas.</li>
                        <li><strong>JS:</strong> JavaScript (JS) es un lenguaje de programación interpretado que se utiliza principalmente para el desarrollo web.</li>
                        <li><strong>Memoria RAM:</strong> Memoria de la computadora, donde residen programas y datos, sobre la que se pueden efectuar operaciones de lectura y escritura de manera temporal.</li>
                        <li><strong>Procesador:</strong> Componente informático que procesa o somete a una serie de operaciones la información introducida en la computadora.</li>
                        <li><strong>Intuitiva:</strong> Intuitiva se refiere a algo que es fácil de entender o usar, sin necesidad de instrucciones o conocimientos previos.</li>
                        <li><strong>CSS:</strong> CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. CSS controla el diseño visual y la apariencia de las páginas web.</li>
                        <p>Si quieres más información, entra aquí:</p>
                       <a href="https://drive.google.com/drive/folders/1Ns6e1YifU5JbjAAfGY5pPg-LRGtjFzFP?usp=sharing" class="info-link">Acceder al enlace</a>
                    </ul>
                </section>
                <Button className='bg-green-800'><Link to="/">Volver al inicio</Link></Button>
            </main>

            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Proyecto de Documentación. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default UserManual;
