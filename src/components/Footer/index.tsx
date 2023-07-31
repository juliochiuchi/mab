import LogoMAB from "../../assets/logo-mab-transparent.png";
import { BsArrowRightShort, } from 'react-icons/bs';
import { PiBuildingsFill, } from 'react-icons/pi';
import { TbClockFilled, } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="mt-12 pb-5">
            <div className="flex flex-col items-center justify-center gap-3 w-full">
                <img className="h-24" src={LogoMAB} alt="logo ab assessoria" />
                <span className="text-[14px] font-medium text-mab-desc-banner">MAB Assessoria e Gerenciamento Condominial</span>
            </div>

            <div className="my-10 flex items-center justify-center gap-7 w-full">
                <div className="py-10 px-7 flex flex-row justify-between gap-10 bg-[#ECF2FF] rounded-3xl w-[50%]">
                    <div className="flex gap-3 items-center">
                        <span className="text-white">
                            <PiBuildingsFill className="text-[3rem] text-mab-blue-button" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-mab-title-banner font-bold text-[18px]">Venha nos visitar!</span>
                            <span className="text-mab-desc-banner font-medium text-[14px] w-[360px]">
                                R. Bernardino de Campos, 2976 - S. J. Rio Preto.
                            </span>
                        </div>
                    </div>

                    <button className="bg-mab-blue-button text-white rounded-3xl py-0 px-3 w-[170px] text-center font-medium text-[12px] flex items-center gap-1
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group
                    ">
                        Visite agora <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </button>
                </div>

                <div className="py-10 px-7 flex flex-row justify-between gap-10 bg-[#6386FF] rounded-3xl w-[50%]">
                    <div className="flex gap-3 items-center">
                        <span className="text-white">
                            <TbClockFilled className="text-[3rem] text-white" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-[18px]">Horário de funcionamento</span>
                            <span className="text-white font-medium text-[14px] w-[360px]">
                                Segunda à Sexta das 8h até às 17h.
                            </span>
                        </div>
                    </div>

                    <button className="bg-mab-blue-button-hover text-white rounded-3xl px-3 w-[150px] text-center font-medium text-[12px] flex items-center gap-1
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group
                    ">
                        Visite agora <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="text-[.9rem]">Copyright © 2023 MAB Assessoria. All rights reserved.</span>
                <span className="mt-1 tracking-widest font-medium text-[.6rem] text-jc-blue-violet hover:text-jc-blue-violet-hover">
                    Designed and Developer by <a className="font-bold text-jc-blue-violet hover:text-jc-blue-violet-hover" href="https://myspace-julio-chiuchi.vercel.app/?vercelToolbarCode=2ObpFWLCq15xv0J" target="_blank">
                        Julio Chiuchi
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
