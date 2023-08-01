import { IoIosCloseCircle, } from 'react-icons/io';
import { LoadingOutlined, } from '@ant-design/icons';

import LogoMAP from '../../assets/logo-mab-transparent.png';

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
                                <img src={LogoMAP} alt="logo mab assessoria" className="mt-14 h-[100px] animate-pulse" />
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
