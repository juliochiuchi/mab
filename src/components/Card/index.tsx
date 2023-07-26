
interface CardProps {
    text: string,
}

const Card = ({ text, }: CardProps) => {
    return (
        <div className="border border-mab-gray-dark-1 bg-mab-gray-dark-1 rounded-lg p-1 min-w-[250px] max-w-[250px] flex items-stretch justify-center">
            <div className="border border-mab-green rounded-lg m-3 p-3 flex text-center items-center w-full">
                <span className="text-mab-white">{text}</span>
            </div>
        </div>
    );
}

export default Card;
