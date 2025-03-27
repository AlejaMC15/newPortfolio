const Contact = () => {
    return (
        <section className="py-20 px-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center">Contacto</h2>
            <form className="max-w-lg mx-auto mt-6">
                <input className="w-full p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Tu nombre" />
                <input className="w-full p-3 mb-4 border border-gray-300 rounded" type="email" placeholder="Tu correo" />
                <textarea className="w-full p-3 mb-4 border border-gray-300 rounded" rows={4} placeholder="Tu mensaje"></textarea>
                <button className="w-full p-3 bg-blue-500 text-white rounded">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
