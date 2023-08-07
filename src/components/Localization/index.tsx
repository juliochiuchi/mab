const Localization = () => {
    return (
        <div className="mt-20 bg-mab-section-gray p-28 w-full">
            <div className="flex items-center justify-center gap-10 smPhone:flex-col smLaptop:flex-row w-full">
                <div className="flex flex-col gap-2 smPhone:items-center smPhone:justify-center smPhone:text-center smLaptop:items-start smLaptop:justify-start smLaptop:text-left">
                    <span className="font-semibold text-mab-blue-dark text-[26px] smPhone:w-full smLaptop:w-[400px]">Contato e Localização</span>
                    <span className="font-medium text-mab-gray-medium text-[14px] smphone:w-full smLaptop:w-[280px]">Conheça a nossa localização através do mapa ao lado ou entre em contato conosco.</span>
                    <button className="mt-7 rounded-3xl text-mab-blue-dark border-mab-blue-dark border p-3 w-[200px] 
                    hover:bg-mab-blue-light hover:text-white hover:border-mab-blue-light
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300
                    ">
                        Entrar em contato
                    </button>
                </div>

                <div className="rounded-3xl w-full">
                    <iframe
                        className="rounded-3xl w-full smPhone:h-[300px] smLaptop:h-[450px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.3151979464516!2d-49.38054055086742!3d-20.8111950927907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5b7e2360ef%3A0xf344fbf561eb9402!2sR.+Bernardino+de+Campos%2C+2976+-+Vila+Maceno%2C+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP%2C+15060-010!5e0!3m2!1spt-BR!2sbr!4v1545320090928"
                        style={{ border: 0 }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Localization;
