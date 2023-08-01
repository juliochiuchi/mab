import { IoIosCloseCircle, } from 'react-icons/io';
import { LoadingOutlined, } from '@ant-design/icons';

import { Drawer, Spin, } from 'antd';
import { useEffect, useState, } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import Solutions from '../../components/Solutions';
import Localization from '../../components/Localization';

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

    // const info = () => {
    //     Modal.info({
    //         title: 'Executamos todos os serviços administrativos necessários ao bom funcionamento do condomínio.',
    //         width: '70%',
    //         content: (
    //             <div className="flex flex-col gap-3 mt-5 text-[.9rem]">
    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Controle mensal de toda documentação contábil, mantendo-a rigorosamente em dia, sempre à disposição do síndico e dos condôminos.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Convocação e orientação de Assembleias Gerais Ordinárias e Extraordinárias.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Elaboração de previsão orçamentária, quando solicitado, a fim de manter equilibrada a situação financeira do condomínio.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Execução de concorrência para compra de material de limpeza, dedetização, recarga de extintores, limpeza de caixa d'agua e demais serviços, nos seus vencimentos ou quando solicitado pelo síndico.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Contratação nos vencimentos de recarga e manutenção de extintores, seguros, limpeza de caixa d'agua, dedetização etc.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Emissão de balancetes menasis de receitas e despesas ordinárias e extraordinárias e envio a todos os condôminos.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Cumprimento de deliberações aprovadas em assembleias e as previstas na convenção.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Apresentação de proposta para renovar seguro de incêndio, de responsabilidade civil e outros riscos, conforme aprovação em Assembleias Gerais, atendendo as condições previstas na Convenção do Condomínio e determinações da legislação vigente.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Emissão de boletos de cobrança de taxas condominiais e extras (proprietários) diretamente na instituição bancária.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Atendimento personalizado através de funcionários especializados em condomínios, que estarão incumbidos de acompanhar, em tempo integral, tarefas relativas à administração, bem como atender com presteza as solicitações do síndico, dando-he reetorno dos expedientes solicitados no tempo desejado.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Assessoria no controle de contas correntes do condomínio, mantendo sempre saldo atualizado.</span>
    //                 </div>

    //                 <div className="flex gap-2 items-center">
    //                     <span className="text-mab-green-check"><MdCheckBox /></span>
    //                     <span>Todos os nossos serviços são informatizados, o que permite mais agilidade e precisão à disposição do síndico e dos condôminos.</span>
    //                 </div>
    //             </div>
    //         ),
    //         onOk() { },
    //     });
    // };

    return (
        <>
            {
                readyThisPage
                    ? <>
                        <div className="smPhone:mabContainerMobile smLaptop:mabContainer">
                            <Header showDrawer={showDrawer} />
                            <Banner showDrawer={showDrawer} />
                            <Products />
                            <Contact />
                            <Solutions />
                        </div>

                        <Localization />

                        <div className="smPhone:mabContainerMobile smLaptop:mabContainer">
                            <Footer />
                        </div>
                    </>
                    : <>
                        <div className="h-[100vh] w-[100vw] -mt-10 flex flex-col gap-5 items-center justify-center">
                            <div className="rounded-full bg-mab-gray-2 flex flex-col items-center justify-center w-[250px]">
                                {/* <img src="../../assets/logo-mab-transparent-6de3c51c.png" alt="logo mab assessoria" className="mt-14 h-[100px] animate-pulse" /> */}
                                <img src="/src/assets/logo-mab-transparent.png" alt="logo mab assessoria" className="mt-14 h-[100px] animate-pulse" />
                                {/* <img src="../../assets/progressbar.gif" alt="loading" className="h-[150px] -mt-14" /> */}
                                <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="loading" className="h-[150px] -mt-14" />
                            </div>
                        </div>
                    </>
            }

            <Drawer
                title="Área Privada"
                placement="bottom"
                // height="650"
                onClose={onClose}
                open={open}
                closeIcon={<IoIosCloseCircle className="text-mab-red-close-ios" />}
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
        </>
    );
}

export default Home;
