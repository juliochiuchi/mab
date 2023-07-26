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
            className={twMerge("border-none bg-mab-blue color-black hover:bg-mab-blue-hover transition-colors duration-700 ease-in-out", rest.className)}
        >
            {text} {icon}
        </button>
    );
}

export default Button;
