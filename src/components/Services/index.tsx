import Card from "../Card";

const Services = () => {
    return (
        <div className="border rounded-lg border-mab-gray-dark-2 m-12 pb-10 flex flex-col bg-mab-gray-dark-2">
            <div className="p-10 text-mab-white-ice text-[1.6rem]">
                <span className="tracking-wide font-bold">Conheça os Serviços</span>
                &nbsp;<span className="text-mab-green no-underline">da <span className="tracking-widest bg-mab-gray-dark-1 px-3 rounded-lg">MAB</span></span>
            </div>

            <div className="px-10 flex justify-start items-stretch flex-wrap gap-3">
                <Card text={'CONTROLE DE DOCUMENTAÇÃO'} />
                <Card text={'CONVOCAÇÃO E ORIENTAÇÃO'} />
                <Card text={'EQUILÍBRIO FINANCEIRO'} />
                <Card text={'CUMPRIMENTO DE DELIBERAÇÕES'} />
                <Card text={'APRESENTAÇÃO DE PROPOSTA'} />
                <Card text={'SERVIÇOS INFORMATIZADOS'} />
            </div>
        </div>
    );
}

export default Services;
