import { IoLocationSharp, } from 'react-icons/io5';
import { MdSupervisedUserCircle, } from 'react-icons/md';
import { ImClock, } from 'react-icons/im';
import Button from '../Button';

interface HeaderProps {
    showDrawer: () => void,
}

const Header = ({ showDrawer, }: HeaderProps) => {
    return (
        <header className="flex flex-wrap items-center smPhone:justify-center smPhone:gap-3 smLaptop:justify-between mt-8 text-[.9rem]">
            <div>
                <img className="h-20" src="/src/assets/logo-mab-transparent.png" alt="logo mab assessoria" />
            </div>

            <div className="flex gap-3 items-center text-[.6rem]">
                <span className="bg-mab-gray-dark-2 text-mab-white rounded-lg p-3 flex items-center gap-2 smPhone:flex-col smLaptop:flex-row">
                    <IoLocationSharp className="text-[1.2rem]" />
                    R. Bernardino de Campos, 2976 | São José do Rio Preto
                </span>
                <span className="bg-mab-gray-dark-2 text-mab-white rounded-lg p-3 flex items-center gap-2 smPhone:flex-col smLaptop:flex-row">
                    <ImClock className="text-[1.2rem]" />
                    Segunda à Sexta das 8h até às 17h. Aos sábados, FECHADO.
                </span>
            </div>

            <div className="flex flex-wrap items-center gap-10">
                <div className="smPhone:hidden smLaptop:inline-flex"><a href="#">Home</a></div>
                <Button
                    className="flex items-center gap-2 rounded-3xl py-3 px-10"
                    showDrawer={showDrawer}
                    text="Área do Condômino"
                    icon={<MdSupervisedUserCircle className="text-[1.5rem]" />}
                />
            </div>
        </header>
    );
}

export default Header;
