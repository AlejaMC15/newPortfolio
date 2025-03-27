const Projects = () => {
    return (
        <section className="py-20 px-10">
            <h2 className="text-3xl font-bold text-center">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Aquí se agregarán los proyectos más adelante */}
                <div className="p-6 bg-gray-200 rounded-lg shadow-md text-center">Proyecto 1</div>
                <div className="p-6 bg-gray-200 rounded-lg shadow-md text-center">Proyecto 2</div>
                <div className="p-6 bg-gray-200 rounded-lg shadow-md text-center">Proyecto 3</div>
            </div>
        </section>
    );
};

export default Projects;
