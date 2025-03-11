const TopInfo = () => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="container mx-auto justify-center">
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-700 font-questrial">
                        {/* Ícono y texto de Envíos a domicilio */}
                        <span className="flex items-center">
                           Tienda de ejemplo
                        </span>
                   
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-2">
                <div className="container mx-auto justify-center">
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-700 font-questrial">
                        {/* Ícono y texto de Envíos a domicilio */}
                        <span className="flex items-center">
                            Envíos a domicilio
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="flex items-center">
                            xxx-xxx-xxx
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopInfo;
