import Barchar from "../../assets/left/barchar.svg"
import Chat from "../../assets/left/chat.svg"
import CurvyLine from "../../assets/left/curvy-line.svg"
import Rhombus from "../../assets/left/rhombus.svg"
import SmallBlackCircle from "../../assets/left/small-black-circle.svg"
import Carpet from "../../assets/right/carpet.svg"
import SmallBlueCircle from "../../assets/right/small-blue-circle.svg"
import SmallCurvyLine from "../../assets/right/small-curvy-line.svg"
import Triangle from "../../assets/right/triangle.svg"
import Window from "../../assets/right/window.svg"

const Banner = () => {
    return (
        <div className="rounded-3xl bg-mab-blue-gray py-12 mt-5
            smLaptop:flex smLaptop:flex-row smLaptop:gap-6 smLaptop:justify-evenly smLaptop:items-center smLaptop:px-0
            smPhone:flex smPhone:flex-col smPhone:gap-6 smPhone:justify-center smPhone:items-center smPhone:px-7
        ">
            <div className="smPhone:flex smPhone:flex-col smPhone:items-center smPhone:justify-center smLaptop:inline-block">
                <div className="ml-52 smPhone:w-12 smLaptop:w-auto">
                    <img src={SmallBlackCircle} alt="small black circle" className="w-auto" />
                </div>

                <div className="flex flex-row items-end">
                    <div className="smPhone:w-20 smLaptop:w-auto">
                        <img src={Barchar} alt="barchar" className="w-auto" />
                    </div>
                    <div className="ml-9 smPhone:w-9 smLaptop:w-auto">
                        <img src={CurvyLine} alt="curvy line" className="w-auto" />
                    </div>
                </div>

                <div className="mt-5 ml-20 smPhone:w-20 smLaptop:w-auto">
                    <img src={Chat} alt="chat" className="w-auto" />
                </div>

                <div className="ml-2 smPhone:w-7 smLaptop:w-auto">
                    <img src={Rhombus} alt="rhombus" className="w-auto" />
                </div>
            </div>

            <div className="text-center flex flex-col gap-5 max-w-[500px]">
                <span className="font-semibold text-[#0c1830] smPhone:text-[28px] smLaptop:text-[38px] tracking-wide">Descubra o passo seguro para sua gestão.</span>
                <span className="text-[#46526a] font-medium text-[14px]">
                    A <span className="text-mab-green">solução</span> ideal para o seu gerenciamento condominial.
                </span>
                <div className="flex flex-row items-center gap-3 mt-5">
                    <span className="text-[#46526a] smPhone:hidden smLaptop:inline-block">Deseja acessar a sua área de condômino?</span>
                    <a
                        href="https://mabassessoria.superlogica.net/clients/areadocondomino/"
                        target="_blank"
                        className="bg-white text-mab-gray-dark hover:text-white hover:bg-mab-blue-light rounded-3xl text-[.8rem] py-3 px-10 smPhone:mx-4 smLaptop:mx-0 flex items-center gap-2 focus:border-none border-mab-blue-light color-black hover:border-mab-blue-dark ease-in-out transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group"
                    >
                        Área do Condômino
                    </a>
                </div>
            </div>

            <div>
                <div className="flex flex-row-reverse smPhone:w-9 smLaptop:w-auto">
                    <img src={SmallCurvyLine} alt="small curvy line" className="w-auto" />
                </div>

                <div className="flex flex-row items-start mt-5 gap-10">
                    <div className="smPhone:w-9 smLaptop:w-auto">
                        <img src={Triangle} alt="triangle" className="w-auto" />
                    </div>

                    <div className="smPhone:w-20 smLaptop:w-auto">
                        <img src={Window} alt="window" className="w-auto" />
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-10 ml-20">
                    <div className="smPhone:w-16 smLaptop:w-auto">
                        <img src={Carpet} alt="carpet" className="w-auto" />
                    </div>

                    <div className="smPhone:w-6 smLaptop:w-auto">
                        <img src={SmallBlueCircle} alt="small blue circle" className="w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
