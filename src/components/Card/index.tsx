
interface CardProps {
    text: string,
}

const Card = ({ text, }: CardProps) => {
    return (
        <div className="border border-mab-gray-dark-1 bg-mab-gray-dark-1 rounded-lg p-1 flex justify-center smPhone:items-center smPhone:min-w-[275px] smPhone:max-w-[275px] smLaptop:items-stretch smLaptop:min-w-[250px] smLaptop:max-w-[250px]">
            <div className="border border-mab-green rounded-lg m-3 p-3 flex text-center items-center w-full">
                <span className="text-mab-white-ice">{text}</span>
            </div>
        </div>
    );
}

export default Card;
