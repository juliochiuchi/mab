import Button from "../Button";

interface BannerProps {
    showDrawer: () => void,
}

const Banner = ({ showDrawer, }: BannerProps) => {
    return (
        <>
            <div className="border rounded-lg p-0 box2Via smPhone:m-4 smLaptop:m-12">
                <div className="flex flex-col justify-center gap-5 smPhone:py-20 smPhone:px-10 smPhone:items-center smLaptop:p-20 smLaptop:items-start">
                    <span className="text-mab-white text-[1.2rem] font-light">Bem vindo ao MAB</span>
                    <span className="text-mab-white font-bold smPhone:text-[1.9rem] smPhone:text-center smLaptop:text-[2.5rem] smLaptop:text-left">
                        A <span className="text-mab-green">SOLUÇÃO</span> IDEAL PARA O SEU <br /> GERENCIAMENTO CONDOMINIAL
                    </span>

                    <Button
                        showDrawer={showDrawer}
                        className="rounded-xl text-[.8rem] py-3 px-10"
                        text="Acessar Área do Condômino"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
