import { MdCheckBox, MdOutlineHomeWork, MdOutlineMailOutline, MdSupervisedUserCircle, } from 'react-icons/md';
import { BsTelephoneForward, } from 'react-icons/bs';
import { ImClock, } from 'react-icons/im';
import { TbBeach, } from 'react-icons/tb';
import { IoLocationSharp, } from 'react-icons/io5';
import { IoIosCloseCircle, } from 'react-icons/io';
import { LoadingOutlined, DotChartOutlined, } from '@ant-design/icons';

import { Drawer, Modal, Skeleton, Space, Spin, } from 'antd';
import { useEffect, useState, } from 'react';

const Home = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [open, setOpen] = useState<boolean>(false);
    const [readyIFrame, setReadyIFrame] = useState<boolean>(false);
    const [readyThisPage, setReadyThisPage] = useState<boolean>(false);

    useEffect(() => {
        setReadyThisPage(false);
        setTimeout(() => {
            setReadyThisPage(true);
        }, 3000);
    }, []);

    const showDrawer = () => {
        setOpen(true);
        setReadyIFrame(false);

        setTimeout(() => {
            setReadyIFrame(true);
        }, 4000);
    };

    const onClose = () => {
        setOpen(false);
    };

    const info = () => {
        Modal.info({
            title: 'Executamos todos os serviços administrativos necessários ao bom funcionamento do condomínio.',
            width: '70%',
            content: (
                <div className="flex flex-col gap-3 mt-5 text-[.9rem]">
                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Controle mensal de toda documentação contábil, mantendo-a rigorosamente em dia, sempre à disposição do síndico e dos condôminos.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Convocação e orientação de Assembleias Gerais Ordinárias e Extraordinárias.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Elaboração de previsão orçamentária, quando solicitado, a fim de manter equilibrada a situação financeira do condomínio.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Execução de concorrência para compra de material de limpeza, dedetização, recarga de extintores, limpeza de caixa d'agua e demais serviços, nos seus vencimentos ou quando solicitado pelo síndico.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Contratação nos vencimentos de recarga e manutenção de extintores, seguros, limpeza de caixa d'agua, dedetização etc.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Emissão de balancetes menasis de receitas e despesas ordinárias e extraordinárias e envio a todos os condôminos.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Cumprimento de deliberações aprovadas em assembleias e as previstas na convenção.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Apresentação de proposta para renovar seguro de incêndio, de responsabilidade civil e outros riscos, conforme aprovação em Assembleias Gerais, atendendo as condições previstas na Convenção do Condomínio e determinações da legislação vigente.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Emissão de boletos de cobrança de taxas condominiais e extras (proprietários) diretamente na instituição bancária.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Atendimento personalizado através de funcionários especializados em condomínios, que estarão incumbidos de acompanhar, em tempo integral, tarefas relativas à administração, bem como atender com presteza as solicitações do síndico, dando-he reetorno dos expedientes solicitados no tempo desejado.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Assessoria no controle de contas correntes do condomínio, mantendo sempre saldo atualizado.</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="text-[#6BC16F]"><MdCheckBox /></span>
                        <span>Todos os nossos serviços são informatizados, o que permite mais agilidade e precisão à disposição do síndico e dos condôminos.</span>
                    </div>
                </div>
            ),
            onOk() { },
        });
    };

    return (
        <>
            {
                readyThisPage
                    ? <>
                        <div className="mabContainer">
                            <header className="flex flex-wrap items-center justify-between mt-8 text-[.9rem]">
                                <div>
                                    <img className="h-20" src="/src/assets/logo-mab-transparent.png" alt="logo mab assessoria" />
                                </div>

                                <div className="flex gap-3 items-center text-[.6rem]">
                                    <span className="bg-[#202020] text-[#f2e4f9] rounded-lg p-3 flex items-center gap-2">
                                        <IoLocationSharp className="text-[1.2rem]" />
                                        R. Bernardino de Campos, 2976 | São José do Rio Preto
                                    </span>
                                    <span className="bg-[#202020] text-[#f2e4f9] rounded-lg p-3 flex items-center gap-2">
                                        <ImClock className="text-[1.2rem]" />
                                        Segunda à Sexta das 8h até às 17h. Aos sábados, FECHADO.
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-10">
                                    <a href="#" className="">Home</a>
                                    <a href="#" onClick={showDrawer} className="flex items-center gap-2 border-none rounded-3xl py-3 px-10 bg-[#55BAE7] color-black hover:bg-[#479bbf] transition-colors duration-700 ease-in-out">
                                        Área do Condômino
                                        <MdSupervisedUserCircle className="text-[1.5rem]" />
                                    </a>
                                </div>
                            </header>

                            <div className="border rounded-lg mt-4 bg-[#f6f6f6]">
                                <div className="border rounded-lg m-12 p-0 box2Via">
                                    <div className="p-20 flex flex-col items-start justify-center gap-5">
                                        <span className="text-[#f2e4f9] text-[1.5rem] font-light">Bem vindo ao MAB</span>
                                        <span className="text-[#f2e4f9] text-[2.5rem] font-bold">
                                            A <span className="text-[#C7DD87]">SOLUÇÃO</span> IDEAL PARA O SEU <br /> GERENCIAMENTO CONDOMINIAL
                                        </span>
                                        <a href="#" onClick={showDrawer} className="border-none rounded-xl py-3 px-10 bg-[#55BAE7] color-black text-[.8rem] hover:bg-[#479bbf] transition-colors duration-700 ease-in-out">
                                            Acessar Área do Condômino
                                        </a>
                                    </div>
                                </div>

                                {/* Soluções */}
                                <div className="border rounded-lg border-[#202020] m-12 flex flex-col bg-[#202020]">
                                    <div className="p-10 text-[#f2e4f9] text-[1.6rem]">
                                        <span className="tracking-wide font-bold">Soluções Mais Populares</span>
                                        &nbsp;<span className="text-[#C7DD87] no-underline">da <span className="tracking-widest bg-[#363636] px-3 rounded-lg">MAB</span></span>
                                    </div>

                                    {/* body */}
                                    <div className="px-10 flex justify-start items-stretch flex-wrap gap-3">
                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center items-center w-full">
                                                <span className="text-[#f2e4f9]">SISTEMA DA CONTA CORRENTE DO CONDOMÍNIO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ASSISTÊNCIA TÉCNICA</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ASSESSORIA COM PESSOAL</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ASSESSORIA JURÍDICA</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">VISITAS AO CONDOMÍNIO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ASSESSORIA NA ADMINISTRAÇÃO DO CONDOMÍNIO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ELABORAÇÃO DE PREVISÃO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ATENDIMENTO PERSONALIZADO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">ASSESSORIA NO CONTROLE DE CONTAS</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">SERVIÇOS INFORMATIZADOS E AGILIDADE</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 -mb-[21px] flex justify-center">
                                        <button onClick={info} className="border-none rounded-xl py-2 px-16 bg-[#55BAE7] color-black hover:bg-[#479bbf] transition-colors duration-700 ease-in-out">
                                            Descubra Mais
                                        </button>
                                    </div>
                                </div>

                                {/* Serviços */}
                                <div className="border rounded-lg border-[#202020] m-12 pb-10 flex flex-col bg-[#202020]">
                                    <div className="p-10 text-[#f2e4f9] text-[1.6rem]">
                                        <span className="tracking-wide font-bold">Conheça os Serviços</span>
                                        &nbsp;<span className="text-[#C7DD87] no-underline">da <span className="tracking-widest bg-[#363636] px-3 rounded-lg">MAB</span></span>
                                    </div>

                                    {/* body */}
                                    <div className="px-10 flex justify-start items-stretch flex-wrap gap-3">
                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">CONTROLE DE DOCUMENTAÇÃO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">CONVOCAÇÃO E ORIENTAÇÃO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">EQUILÍBRIO FINANCEIRO</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center items-center w-full">
                                                <span className="text-[#f2e4f9]">CUMPRIMENTO DE DELIBERAÇÕES</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">APRESENTAÇÃO DE PROPOSTA</span>
                                            </div>
                                        </div>

                                        <div className="border border-[#363636] bg-[#363636] rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
                                            <div className="border border-[#C7DD87] rounded-lg m-3 p-3 flex text-center justify-center items-center w-full">
                                                <span className="text-[#f2e4f9]">SERVIÇOS INFORMATIZADOS</span>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        /* <div className="mt-8 -mb-[21px] flex justify-center">
                                            <a href="" className="border-none rounded-xl py-2 px-16 bg-[#55BAE7] color-black hover:bg-[#4fadd5] transition-colors duration-700 ease-in-out">
                                                Conhecer Mais
                                            </a>
                                        </div>
                                        */
                                    }
                                </div>

                                {/* Localização e Contato */}
                                <div className="border rounded-lg border-[#202020] m-12 bg-[#202020] text-[#f2e4f9]">
                                    <div className="p-10 text-[#f2e4f9] text-[1.6rem]">
                                        <span className="tracking-wide font-bold">Localização e Contato</span>
                                        &nbsp;<span className="text-[#C7DD87]">da <span className="tracking-widest bg-[#363636] px-3 rounded-lg">MAB</span></span>
                                    </div>

                                    <div className="flex gap-2 flex-wrap">
                                        <div className="flex justify-around gap-2">
                                            <div className="mx-10 text-[.9rem] max-w-[45%] bg-[#f8f8f8] text-[#202020] rounded-lg p-5">
                                                <span>
                                                    A <span className="tracking-widest bg-[#C7DD87] px-2 rounded-md">MAB</span> é uma empresa que está no mercado atuando com
                                                    &nbsp;<span className="tracking-widest bg-[#C7DD87] px-2 rounded-md">assessoria de administração de condomínio</span> localizada em São José do Rio Preto.
                                                    Com dedicação em desenvolver suas habilidades, a MAB
                                                    &nbsp;<span className="tracking-widest bg-[#C7DD87] px-2 rounded-md">é capaz de auxiliar e orientar passo-a-passo todo o processo necessário dentro
                                                        do ambiente de condôminos,</span> tornando para seus clientes, uma tarefa confortável e ágil. Ela desempenha soluções como:
                                                    &nbsp; <span className="tracking-widest bg-[#C7DD87] px-2 rounded-md">sistema de conta
                                                        corrente do condomínio, assessoria técnica, pessoal, jurídica e visitas ao condomínio.</span> Dessa forma, a MAB visa atender todos os serviços
                                                    administrativos necessários ao bom funcionamento do condomínio.
                                                </span>
                                            </div>

                                            <div className="mx-10 flex flex-wrap gap-2 flex-col items-center text-center text-[.9rem] bg-[#303030] rounded-lg p-5">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <MdOutlineHomeWork className="text-[#9cb552] text-[1.5rem]" /> R. Bernardino de Campos, 2976 Sala 306 | S. J. Rio Preto
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <BsTelephoneForward className="text-[#9cb552] text-[1.5rem]" /> +55 (17) 4141-5100
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <MdOutlineMailOutline className="text-[#9cb552] text-[1.5rem]" /> <a className="text-[#C7DD87]" href="mailto:contato@mabassessoria.com.br">contato@mabassessoria.com.br</a>
                                                    </div>

                                                    <div className="w-full flex justify-center my-6">
                                                        <hr className="w-20" />
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <ImClock className="text-[#9cb552] text-[1.3rem]" /> Segunda à Sexta das 8h às 17h
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <TbBeach className="text-[#9cb552] text-[1.5rem]" /> Aos sábados, <span className="bg-[#e1b4b4] text-[#202020] p-2 rounded-lg tracking-widest">FECHADO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-16 rounded-lg w-full">
                                            <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.3151979464516!2d-49.38054055086742!3d-20.8111950927907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5b7e2360ef%3A0xf344fbf561eb9402!2sR.+Bernardino+de+Campos%2C+2976+-+Vila+Maceno%2C+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP%2C+15060-010!5e0!3m2!1spt-BR!2sbr!4v1545320090928" width="100%" height="250" style={{ border: 0 }}></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <footer className="flex flex-col items-center justify-center mt-12 pb-5">
                                <span className="text-[.9rem]">Copyright © 2023 MAB Assessoria. All rights reserved.</span>
                                <span className="text-[.7rem]">
                                    Developer: <a href="https://myspace-julio-chiuchi.vercel.app/?vercelToolbarCode=2ObpFWLCq15xv0J" target="_blank">
                                        Julio Chiuchi
                                    </a>
                                </span>
                            </footer>

                            <Drawer
                                title="Área Privada"
                                placement="bottom"
                                height="650"
                                onClose={onClose}
                                open={open}
                                closeIcon={<IoIosCloseCircle className="text-[#FF5F56]" />}
                            >
                                {
                                    readyIFrame
                                        ? <>
                                            <div id="areaCondominio" style={{ width: '100%' }}>
                                                <iframe name="easyXDM_superlogica_default3290_provider" id="easyXDM_superlogica_default3290_provider" src="https://superlogica.net/widget-server/iframe-proxy.html?url=https%3A%2F%2Fsuperlogica.net%2F%2Fwidget-server%2Fmodulos%2Fcondominios%2Flogin%2F%3Flicenca%3Dmabassessoria%26loginBoleto%3D1&amp;xdm_e=https%3A%2F%2Fmabassessoria.com.br&amp;xdm_c=default3290&amp;xdm_p=1"
                                                    style={{
                                                        width: '100%',
                                                        height: '450px',
                                                        overflowY: 'hidden',
                                                    }}
                                                ></iframe>
                                            </div>
                                        </>
                                        : <>
                                            <div className="flex items-center justify-center my-3">
                                                <Spin indicator={antIcon} />
                                            </div>
                                        </>
                                }
                            </Drawer>
                        </div>
                    </>
                    : <>
                        <div className="mx-20 my-10">
                            <Space className="flex items-center justify-start">
                                <Skeleton.Button active={true} size={'large'} shape={'round'} block={true} />
                                <Skeleton.Avatar active={true} size={'large'} shape={'circle'} />
                                <Skeleton.Input active={true} size={'large'} />
                            </Space>
                            <br />
                            <br />

                            <Skeleton.Button active={true} size={'large'} shape={'round'} block={true} />
                            <br /><br />
                            <Skeleton.Input active={true} size={'large'} block={true} />
                            <br /><br />
                            <Skeleton.Input active={true} size={'large'} block={true} />
                            <br /><br />
                            <Skeleton.Input active={true} size={'large'} block={true} />
                            <br /><br />
                            <Skeleton.Input active={true} size={'large'} block={true} />
                            <br /><br />
                            <Skeleton.Input active={true} size={'large'} block={true} />

                            <br /><br />
                            <div>
                                <Space className="flex items-center justify-start gap-2">
                                    <Skeleton.Image active={true} />
                                    <Skeleton.Image active={true} />

                                    <Skeleton.Node active={true}>
                                        <DotChartOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
                                    </Skeleton.Node>
                                </Space>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}

export default Home;
