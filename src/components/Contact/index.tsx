import { MdOutlineHomeWork, MdOutlineMailOutline, } from 'react-icons/md';
import { BsTelephoneForward, } from 'react-icons/bs';
import { ImClock, } from 'react-icons/im';
import { TbBeach, } from 'react-icons/tb';

const Contact = () => {
    return (
        <div className="border rounded-lg border-mab-gray-dark-2 bg-mab-gray-1 text-mab-gray-dark-2 smPhone:my-12 smPhone:mx-4 mdLaptop:m-12">
            <div className="text-mab-gray-dark-2 smPhone:text-[1.2rem] smPhone:p-4 smLaptop:text-[1.6rem] smLaptop:p-10">
                <span className="tracking-wide font-bold">Localização e Contato da</span>
                &nbsp;<span className="text-mab-green tracking-widest bg-mab-gray-dark-1 px-3 rounded-lg">MAB</span>
            </div>

            <div className="flex gap-2 flex-wrap">
                <div className="flex justify-around gap-2 smPhone:w-full smLaptop:w-auto">
                    <div className="smPhone:hidden mdLaptop:inline-block mx-10 text-[.9rem] max-w-[45%] bg-mab-gray-1 tracking-widest text-mab-gray-dark-2 rounded-lg p-5">
                        <span>
                            A <span className="tracking-widest bg-mab-green px-2 rounded-md">MAB</span> é uma empresa que está no mercado atuando com
                            &nbsp;<span className="tracking-widest bg-mab-green px-2 rounded-md">assessoria de administração de condomínio</span> localizada em São José do Rio Preto.
                            Com dedicação em desenvolver suas habilidades, a MAB
                            &nbsp;<span className="tracking-widest bg-mab-green px-2 rounded-md">é capaz de auxiliar e orientar passo-a-passo todo o processo necessário dentro
                                do ambiente de condôminos,</span> tornando para seus clientes, uma tarefa confortável e ágil. Ela desempenha soluções como:
                            &nbsp; <span className="tracking-widest bg-mab-green px-2 rounded-md">sistema de conta
                                corrente do condomínio, assessoria técnica, pessoal, jurídica e visitas ao condomínio.</span> Dessa forma, a MAB visa atender todos os serviços
                            administrativos necessários ao bom funcionamento do condomínio.
                        </span>
                    </div>

                    <div className="text-mab-white-ice max-w-[100%] flex flex-wrap gap-2 flex-col items-center text-center bg-mab-gray-dark-3 rounded-lg smPhone:p-4 smPhone:mx-4 smPhone:text-[.6rem] mdPhone:text-[.7rem] smLaptop:p-5 smLaptop:mx-10 smLaptop:text-[.9rem]">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <MdOutlineHomeWork className="text-mab-green-icon smPhone:text-[.7rem] smLaptop:text-[1.5rem]" /> R. Bernardino de Campos, 2976 Sala 306 | S. J. Rio Preto
                            </div>
                            <div className="flex items-center gap-3">
                                <BsTelephoneForward className="text-mab-green-icon smPhone:text-[.7rem] smLaptop:text-[1.5rem]" /> +55 (17) 4141-5100
                            </div>
                            <div className="flex items-center gap-3">
                                <MdOutlineMailOutline className="text-mab-green-icon smPhone:text-[.7rem] smLaptop:text-[1.5rem]" /> <a className="text-mab-green" href="mailto:contato@mabassessoria.com.br">contato@mabassessoria.com.br</a>
                            </div>

                            <div className="w-full flex justify-center my-6">
                                <hr className="w-20" />
                            </div>

                            <div className="flex items-center gap-3">
                                <ImClock className="text-mab-green-icon smPhone:text-[.7rem] smLaptop:text-[1.3rem]" /> Segunda à Sexta das 8h às 17h
                            </div>

                            <div className="flex items-center gap-3">
                                <TbBeach className="text-mab-green-icon smPhone:text-[.7rem] smLaptop:text-[1.5rem]" /> Aos sábados, <span className="bg-mab-red-close text-mab-gray-dark-2 p-2 rounded-lg tracking-widest">FECHADO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-lg w-full">
                    <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.3151979464516!2d-49.38054055086742!3d-20.8111950927907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5b7e2360ef%3A0xf344fbf561eb9402!2sR.+Bernardino+de+Campos%2C+2976+-+Vila+Maceno%2C+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP%2C+15060-010!5e0!3m2!1spt-BR!2sbr!4v1545320090928" width="100%" height="250" style={{ border: 0 }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
