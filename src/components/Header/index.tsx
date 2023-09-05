// import { IoLocationSharp, } from 'react-icons/io5';
import { MdSupervisedUserCircle, } from 'react-icons/md';
// import { ImClock, } from 'react-icons/im';
import LogoMAB from "../../assets/logo-mab-transparent.png";
// import Button from '../Button';

// interface HeaderProps {
//     showDrawer: () => void,
// }

// const Header = ({ showDrawer, }: HeaderProps) => {
const Header = () => {
    return (
        <header className="flex flex-wrap items-center smPhone:justify-center smPhone:gap-3 smLaptop:justify-between mt-8 text-[.9rem]">
            <div className="flex flex-wrap items-center gap-10 smPhone:justify-center">
                <img className="h-20" src={LogoMAB} alt="logo mab assessoria" />
            </div>

            <div className="flex flex-wrap items-center gap-10">
                <div className="smPhone:hidden lgLaptop:inline-flex"><a href="#">Home</a></div>
                {/* <Button
                    className="flex items-center gap-2 rounded-3xl py-3 px-10 focus:border-none"
                    showDrawer={showDrawer}
                    text="Área do Condômino"
                    icon={<MdSupervisedUserCircle className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />}
                /> */}
                <a
                    href="https://mabassessoria.superlogica.net/clients/areadocondomino/"
                    target="_blank"
                    className="flex items-center gap-2 rounded-3xl py-3 px-10 focus:border-none bg-mab-blue-light border-mab-blue-light color-black hover:bg-mab-blue-dark hover:border-mab-blue-dark text-white ease-in-out transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group"
                >
                    <MdSupervisedUserCircle className="text-[1.5rem] transition ease-in-out delay-150 duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    &nbsp; Área do Condômino
                </a>
            </div>
        </header>
    );
}

export default Header;
