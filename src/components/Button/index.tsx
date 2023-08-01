import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge, } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    showDrawer?: () => void,
    info?: () => void,
    icon?: ReactNode,
}

const Button = ({ showDrawer, info, text, icon, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            onClick={
                (showDrawer !== undefined && showDrawer !== null
                    ? showDrawer
                    : (info !== undefined && info !== null
                        ? info
                        : () => {return null}
                    )
                )
            }
            className={twMerge("focus:border-none bg-mab-blue-light border-mab-blue-light color-black hover:bg-mab-blue-dark hover:border-mab-blue-dark text-white ease-in-out transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group", rest.className)}
        >
            {text} {icon}
        </button>
    );
}

export default Button;
