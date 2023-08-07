import AppForDevelopers from "../../assets/apps-for-developers.png";
import AppForDesigner from "../../assets/apps-for-designers.png";
import AppForMarketers from "../../assets/apps-for-marketers.png";
import { BsArrowRightShort, } from 'react-icons/bs';

const Solutions = () => {
    return (
        <div className="mt-10 p-0">
            <div className="w-full text-center">
                <h2 className="font-semibold tracking-wide text-[30px]">Soluções mais populares da MAB</h2>
            </div>

            <div className="mt-10 flex gap-5 justify-center smPhone:flex-col smPhone:items-center smLaptop:flex-row smLaptop:items-stretch">
                <div className="group border shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <img className="rounded-t-xl" src={AppForDevelopers} alt="developers" />
                    <div className="flex flex-col gap-2 m-10">
                        <span className="text-mab-blue-dark font-bold group-hover:text-mab-blue-light">Conta corrente</span>
                        <span className="text-mab-gray-medium font-medium text-[14px]">Sistema da conta corrente do condomínio, serviços informatizados e controle de contas</span>
                        <a className="mt-3 text-[14px] text-mab-blue-dark font-semibold flex gap-2 items-center group-hover:text-mab-blue-light" href="#">
                            Descubra mais <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </a>
                    </div>
                </div>

                <div className="group border shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <img className="rounded-t-xl" src={AppForMarketers} alt="marketers" />
                    <div className="flex flex-col gap-2 m-10">
                        <span className="text-mab-blue-dark font-bold group-hover:text-mab-blue-light">Pessoal e jurídica</span>
                        <span className="text-mab-gray-medium font-medium text-[14px]">Assessoria com pessoal, jurídica e controle de contas</span>
                        <a className="mt-3 text-[14px] text-mab-blue-dark font-semibold flex gap-2 items-center group-hover:text-mab-blue-light" href="#">
                            Descubra mais <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </a>
                    </div>
                </div>

                <div className="group border shadow-md rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                    <img className="rounded-t-xl" src={AppForDesigner} alt="designers" />
                    <div className="flex flex-col gap-2 m-10">
                        <span className="text-mab-blue-dark font-bold group-hover:text-mab-blue-light">Atendimento personalizado</span>
                        <span className="text-mab-gray-medium font-medium text-[14px]">Atendimento personalizado, sistema informatizado e agilidade</span>
                        <a className="mt-3 text-[14px] text-mab-blue-dark font-semibold flex gap-2 items-center group-hover:text-mab-blue-light" href="#">
                            Descubra mais <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
