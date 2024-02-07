
const Card = ({ position, company, dates, desc }: {

    position: string, company: string, dates: string, desc:string

}) => {

    return (
        <div className="mb-10 bg-white rounded-md p-6 border border-gray-300 flex flex-col h-full shadow-lg">
        <h3 className="text-lg font-semibold text-center mb-4">{position}</h3>
        <div className="flex justify-between mb-2">
            <span className="font-medium"><b>{company}</b></span>
            <span className="ml-2">{dates}</span>
        </div>
        <p className="text-center text-gray-600 flex-1 overflow-hidden">
            <span className="inline-block align-middle">{desc}</span>
        </p>
        </div>
    )
};


export default Card;