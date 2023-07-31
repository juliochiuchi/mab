import { BsArrowRightShort, } from 'react-icons/bs';
import { HiOutlineClipboardDocumentCheck, } from 'react-icons/hi2';
import { RiTeamLine, RiMoneyDollarCircleFill, } from 'react-icons/ri';
import { PiWalletDuotone, } from 'react-icons/pi';
import { LuHelpingHand, } from 'react-icons/lu';
import { PiMonitorDuotone, } from 'react-icons/pi';
import { SiReactquery, } from 'react-icons/si';
import { VscFolderActive, } from 'react-icons/vsc';
import { MdOutlineSecurity, } from 'react-icons/md';

import Button from "../Button";

const Products = () => {
    return (
        <div className="mt-10 p-0">
            <div className="p-0 mt-5 flex justify-start gap-14">
                <div className="flex flex-col gap-5 w-full">
                    <h2 className="font-semibold tracking-wide text-[30px]">Produtos em destaque</h2>

                    <div className="border rounded-2xl shadow-lg p-3 flex justify-between items-center py-5">
                        <div className="ml-10">
                            <div className="flex items-center gap-4">
                                <div>
                                    <RiMoneyDollarCircleFill className="text-[5rem] text-[#002C76]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-mab-title-banner">Previsão</span>
                                    <span className="text-mab-desc-banner font-medium text-[14px] w-[500px]">
                                        Elaboração de previsão orçamentária, quando solicitado, a fim de manter equilibrada a situação
                                        financeira do condomínio.
                                    </span>
                                    <div className="text-[#5178ff] bg-[#ecf2ff] border-[white] border rounded-3xl w-[100px] text-center text-[12px] py-1">
                                        <span>Destaque</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mr-10">
                            <Button
                                className="flex items-center gap-2 rounded-3xl py-3 px-6 focus:border-none"
                                text="Mais"
                                icon={<BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />}
                            />
                        </div>
                    </div>

                    <div className="border rounded-2xl shadow-lg p-3 flex justify-between items-center py-5">
                        <div className="ml-10">
                            <div className="flex items-center gap-4">
                                <div>
                                    <VscFolderActive className="text-[#5142FB] text-[5rem]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-mab-title-banner">Gestão</span>
                                    <span className="text-mab-desc-banner font-medium text-[14px] w-[500px]">
                                        Emissão de balancetes mensais de receitas e despesas ordinárias e extraordinárias e envio a todos os condôminos.
                                    </span>
                                    <div className="text-[#5178ff] bg-[#ecf2ff] border-[white] border rounded-3xl w-[100px] text-center text-[12px] py-1">
                                        <span>Destaque</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mr-10">
                            <Button
                                className="flex items-center gap-2 rounded-3xl py-3 px-6 focus:border-none"
                                text="Mais"
                                icon={<BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />}
                            />
                        </div>
                    </div>

                    <div className="border rounded-2xl shadow-lg p-3 flex justify-between items-center py-5">
                        <div className="ml-10">
                            <div className="flex items-center gap-4">
                                <div>
                                    <MdOutlineSecurity className="text-[5rem] text-[#005DFF]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-mab-title-banner">Segurança</span>
                                    <span className="text-mab-desc-banner font-medium text-[14px] w-[500px]">
                                        Apresentação de proposta para renovar seguro de incêndio, de responsabilidade civil e outros
                                        riscos, conforme aprovação em assembleias gerais, atendendo as condições previstas na
                                        convenção do condomínio e determinações da legislação vigente.
                                    </span>
                                    <div className="text-[#5178ff] bg-[#ecf2ff] border-[white] border rounded-3xl w-[100px] text-center text-[12px] py-1">
                                        <span>Destaque</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mr-10">
                            <Button
                                className="flex items-center gap-2 rounded-3xl py-3 px-6 focus:border-none"
                                text="Mais"
                                icon={<BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[35%] flex flex-col gap-5">
                    <h2 className="font-semibold tracking-wide text-[18px]">Categorias</h2>

                    <div className="border rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center gap-2">
                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <HiOutlineClipboardDocumentCheck className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Documentos</span>
                                    <span className="text-mab-desc-banner">Controle de documentação</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>

                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <RiTeamLine className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Orientação</span>
                                    <span className="text-mab-desc-banner">Convocação e orientação</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>

                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <PiWalletDuotone className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Finanças</span>
                                    <span className="text-mab-desc-banner">Equilíbrio financeiro</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>

                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <LuHelpingHand className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Deliberações</span>
                                    <span className="text-mab-desc-banner">Cumprimento de decisão</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>

                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <PiMonitorDuotone className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Diversidade</span>
                                    <span className="text-mab-desc-banner">Apresentação de proposta</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>

                        <button className="group text-[12px] w-full p-3 flex items-center justify-between rounded-lg hover:bg-mab-blue-banner hover:rounded-lg transition-colors duration-700 ease-in-out">
                            <div className="flex items-center gap-2">
                                <div>
                                    <SiReactquery className="text-[1.3rem]" />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <span className="text-mab-title-banner font-semibold">Tecnológico</span>
                                    <span className="text-mab-desc-banner">Serviços informatizados</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-mab-title-banner font-semibold">
                                    <BsArrowRightShort className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
