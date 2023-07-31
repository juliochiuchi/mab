import Button from "../Button";
import Barchar from "../../assets/left/barchar.svg";
import Chat from "../../assets/left/chat.svg";
import CurvyLine from "../../assets/left/curvy-line.svg";
import Rhombus from "../../assets/left/rhombus.svg";
import SmallBlackCircle from "../../assets/left/small-black-circle.svg";
import Carpet from "../../assets/right/carpet.svg";
import SmallBlueCircle from "../../assets/right/small-blue-circle.svg";
import SmallCurvyLine from "../../assets/right/small-curvy-line.svg";
import Triangle from "../../assets/right/triangle.svg";
import Window from "../../assets/right/window.svg";

interface BannerProps {
    showDrawer: () => void,
}

const Banner = ({ showDrawer, }: BannerProps) => {
    return (
        <div className="rounded-3xl flex flex-row gap-6 justify-evenly items-center bg-[#ecf2ff] py-12 mt-5">
            <div className="">
                <div className="ml-52"><img src={SmallBlackCircle} alt="small black circle" /></div>
                <div className="flex flex-row items-end">
                    <div><img src={Barchar} alt="barchar" /></div>
                    <div className="ml-9"><img src={CurvyLine} alt="curvy line" /></div>
                </div>
                <div className="mt-5 ml-20"><img src={Chat} alt="chat" /></div>
                <div className="ml-2"><img src={Rhombus} alt="rhombus" /></div>
            </div>

            <div className="text-center flex flex-col gap-5 max-w-[500px]">
                <span className="font-semibold text-[#0c1830] text-[38px] tracking-wide">Descubra o passo seguro para sua gestão.</span>
                <span className="text-[#46526a] font-medium text-[14px]">
                    A <span className="text-mab-green">solução</span> ideal para o seu gerenciamento condominial.
                </span>
                <div className="flex flex-row items-center gap-3 mt-5">
                    <span className="text-[#46526a]">Deseja acessar a sua área de condômino?</span>
                    <Button
                        showDrawer={showDrawer}
                        className="bg-white text-mab-color-input hover:text-white hover:bg-mab-blue-button rounded-3xl text-[.8rem] py-3 px-10"
                        text="Acessar Área do Condômino"
                    />
                </div>
            </div>

            <div className="">
                <div className="flex flex-row-reverse"><img src={SmallCurvyLine} alt="small curvy line" /></div>
                <div className="flex flex-row items-start mt-5 gap-10">
                    <div><img src={Triangle} alt="triangle" /></div>
                    <div><img src={Window} alt="window" /></div>
                </div>
                <div className="flex items-center gap-4 mt-10 ml-20">
                    <div><img src={Carpet} alt="carpet" /></div>
                    <div><img src={SmallBlueCircle} alt="small blue circle" /></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
