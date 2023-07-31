// F8F8FB
const Localization = () => {
    return (
        <div className="mt-20 bg-mab-localization p-28">
            <div className="flex items-center justify-center gap-10">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-mab-title-banner text-[26px] w-[400px]">Contato e Localização</span>
                    <span className="font-medium text-mab-desc-banner text-[14px] w-[280px]">Conheça a nossa localização através do mapa ao lado ou entre em contato conosco.</span>
                    <button className="mt-7 rounded-3xl text-mab-title-banner border-mab-title-banner border p-3 w-[200px] 
                    hover:bg-mab-blue-button hover:text-white hover:border-mab-blue-button
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300
                    ">
                        Entrar em contato
                    </button>
                </div>

                <div className="rounded-3xl w-full">
                    <iframe className="rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.3151979464516!2d-49.38054055086742!3d-20.8111950927907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5b7e2360ef%3A0xf344fbf561eb9402!2sR.+Bernardino+de+Campos%2C+2976+-+Vila+Maceno%2C+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP%2C+15060-010!5e0!3m2!1spt-BR!2sbr!4v1545320090928" width="100%" height="450" style={{ border: 0 }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Localization;
