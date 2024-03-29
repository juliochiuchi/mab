import { BsArrowRightShort, } from 'react-icons/bs'
import { PiBuildingsFill, } from 'react-icons/pi'
import { TbClockFilled, } from 'react-icons/tb'

const Contact = () => {
    return (
        <div className="my-14 flex justify-center gap-7 w-full smPhone:flex-col smLaptop:flex-row">
            <div className="py-14 px-7 flex flex-col gap-2 bg-mab-blue-gray rounded-3xl smPhone:w-full smLaptop:w-[50%]">
                <span className="text-white">
                    <PiBuildingsFill className="text-[3rem] text-mab-blue-light" />
                </span>
                <span className="text-mab-blue-dark font-bold text-[30px]">Venha nos visitar!</span>
                <span className="text-mab-gray-medium font-medium text-[14px] smPhone:w-auto smLaptop:w-[380px]">
                    Estamos localizados na rua Bernardino de Campos, 2976 - São José do Rio Preto. São Paulo, Brasil.
                </span>
                <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//R.+Bernardino+de+Campos,+2976+-+Vila+Maceno+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP+15015-300/@-20.8111212,-49.3807012,19z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94bdad5b7e2360ef:0xf344fbf561eb9402"
                    className="mt-7 bg-mab-blue-light text-white rounded-3xl p-3 w-[170px] text-center flex items-center justify-center gap-2
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group
                ">
                    Visite agora <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </a>
            </div>

            <div className="py-14 px-7 flex flex-col gap-2 bg-[#6386FF] rounded-3xl smPhone:w-full smLaptop:w-[50%]">
                <span className="text-white">
                    <TbClockFilled className="text-[3rem] text-white" />
                </span>
                <span className="text-white font-bold text-[30px]">Horário de funcionamento</span>
                <span className="text-white font-medium text-[14px] smPhone:w-auto smLaptop:w-[380px]">
                    Estamos abertos de Segunda à Sexta das 8h da manhã até às 17h da tarde. Aos sábados, FECHADO.
                </span>
                <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//R.+Bernardino+de+Campos,+2976+-+Vila+Maceno+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP+15015-300/@-20.8111212,-49.3807012,19z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94bdad5b7e2360ef:0xf344fbf561eb9402"
                    className="mt-7 bg-mab-blue-dark text-white rounded-3xl p-3 w-[170px] text-center flex items-center justify-center gap-2
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group
                ">
                    Visite agora <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </a>
            </div>
        </div>
    )
}

export default Contact
