import { IoIosCloseCircle, } from 'react-icons/io'
import LogoMAP from '../../assets/logo-mab-transparent.png'
import { Drawer, } from 'antd'
import { useEffect, useState, } from 'react'

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
                        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Ops! Esta página não está mais disponível.</h2>
      <p className="mb-6 text-gray-600">
        O conteúdo que você está procurando foi removido ou não existe mais.
      </p>
    </div>
                    </>
                    : <>
                        <div className="h-[100vh] w-[100vw] -mt-10 flex flex-col gap-5 items-center justify-center">
                            <div className="rounded-full bg-mab-gray-2 flex flex-col items-center justify-center w-[250px]">
                                <img src={LogoMAP} alt="logo mab assessoria" className="mt-14 h-[100px] animate-pulse" />
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
