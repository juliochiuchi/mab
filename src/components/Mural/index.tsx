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
        <div data-hasButton={hasButton} className="data-[hasButton=false]:pb-10 border rounded-lg border-mab-gray-dark-2 m-12 flex flex-col bg-mab-gray-dark-2">
            <div className="p-10 text-mab-white-ice text-[1.6rem]">
                <span className="tracking-wide font-bold">{titleMural}</span>
                &nbsp;<span className="text-mab-green tracking-widest bg-mab-gray-dark-1 px-3 rounded-lg">{titleDestaque}</span>
            </div>

            <div className="px-10 flex justify-start items-stretch flex-wrap gap-3">
                {
                    textCards.length > 0 && textCards !== undefined && textCards.map((item: { id: number, text: string, }) => (
                        <>
                            <Card key={item.id} text={item.text} />
                        </>
                    ))
                }
            </div>

            {
                hasButton && (
                    <div className="mt-8 -mb-[21px] flex justify-center">
                        <Button info={info} text="Descubra Mais" className="rounded-xl py-2 px-16" />
                    </div>
                )
            }
        </div>
    );
}

export default Mural;
