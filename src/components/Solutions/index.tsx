import Button from "../Button";
import Card from "../Card";

interface Solutions {
    info: () => void,
}

const Solutions = ({ info, }: Solutions) => {
    return (
        <>
            <div className="border rounded-lg border-mab-gray-dark-2 m-12 flex flex-col bg-mab-gray-dark-2">
                <div className="p-10 text-mab-white-ice text-[1.6rem]">
                    <span className="tracking-wide font-bold">Soluções Mais Populares</span>
                    &nbsp;<span className="text-mab-green no-underline">da <span className="tracking-widest bg-mab-gray-dark-1 px-3 rounded-lg">MAB</span></span>
                </div>

                <div className="px-10 flex justify-start items-stretch flex-wrap gap-3">
                    <Card text={'SISTEMA DA CONTA CORRENTE DO CONDOMÍNIO'} />
                    <Card text={'ASSISTÊNCIA TÉCNICA'} />
                    <Card text={'ASSESSORIA COM PESSOAL'} />
                    <Card text={'ASSESSORIA JURÍDICA'} />
                    <Card text={'VISITAS AO CONDOMÍNIO'} />
                    <Card text={'ASSESSORIA NA ADMINISTRAÇÃO DO CONDOMÍNIO'} />
                    <Card text={'ELABORAÇÃO DE PREVISÃO'} />
                    <Card text={'ATENDIMENTO PERSONALIZADO'} />
                    <Card text={'ASSESSORIA NO CONTROLE DE CONTAS'} />
                    <Card text={'SERVIÇOS INFORMATIZADOS E AGILIDADE'} />
                </div>

                <div className="mt-8 -mb-[21px] flex justify-center">
                    <Button info={info} text="Descubra Mais" className="rounded-xl py-2 px-16" />
                </div>
            </div>
        </>
    );
};

export default Solutions;
