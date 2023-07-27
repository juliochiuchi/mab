import Button from "../Button";
import Card from "../Card";

interface MuralProps {
    titleMural: string,
    titleDestaque: string,
    textCards: { id: number, text: string, }[],
    hasButton?: boolean,
    info?: () => void,
}

const Mural = ({ titleMural, titleDestaque, textCards, hasButton = false, info, }: MuralProps) => {
    return (
        <div data-hasButton={hasButton} className="data-[hasButton=false]:pb-10 border rounded-lg border-mab-gray-dark-2 flex flex-col bg-mab-gray-dark-2 smPhone:my-12 smPhone:mx-4 mdLaptop:m-12">
            <div className="text-mab-white-ice smPhone:text-[1.2rem] smPhone:p-4 smLaptop:text-[1.6rem] smLaptop:p-10">
                <span className="tracking-wide font-bold">{titleMural}</span>
                &nbsp;<span className="text-mab-green tracking-widest bg-mab-gray-dark-1 px-3 rounded-lg">{titleDestaque}</span>
            </div>

            <div className="flex flex-wrap gap-3 items-stretch smPhone:justify-center smLaptop:justify-start smLaptop:px-10">
                {
                    textCards.length > 0 && textCards !== undefined && textCards.map((item: { id: number, text: string, }) => (
                        <Card text={item.text} />
                    ))
                }
            </div>

            {
                hasButton && (
                    <div className="mt-8 -mb-[21px] flex justify-center border-mab-blue">
                        <Button info={info} text="Descubra Mais" className="rounded-xl py-2 smPhone:w-[90%] smPhone:px-0 smLaptop:w-auto smLaptop:px-16" />
                    </div>
                )
            }
        </div>
    );
}

export default Mural;
