import { IoIosCloseCircle, } from 'react-icons/io'
import LogoMAP from '../../assets/logo-mab-transparent.png'

import { Drawer, } from 'antd'
import { useEffect, useState, } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Products from '../../components/Products'
import Solutions from '../../components/Solutions'
import Localization from '../../components/Localization'

const Home = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [readyThisPage, setReadyThisPage] = useState<boolean>(false)

    useEffect(() => {
        setReadyThisPage(false)
        setTimeout(() => {
            setReadyThisPage(true)
        }, 3000)
    }, [])

    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            {
                readyThisPage
                    ? <>
                        <header className="smPhone:mabContainerMobile smLaptop:mabContainer">
                            <Header />
                        </header>

                        <main className="smPhone:mabContainerMobile smLaptop:mabContainer">
                            <Banner />
                            <Products />
                            <Contact />
                            <Solutions />
                        </main>

                        <Localization />

                        <footer className="smPhone:mabContainerMobile smLaptop:mabContainer">
                            <Footer />
                        </footer>
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
                onClose={onClose}
                open={open}
                closeIcon={<IoIosCloseCircle className="text-mab-red-close-ios" />}
            >
            </Drawer>
        </>
    )
}

export default Home
