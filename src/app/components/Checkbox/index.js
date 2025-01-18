import { CheckCircle } from 'react-feather';

export default function CheckBoxContainer({ causa, classe }) {
    return (
        <div className={`${classe} flex items-center justify-center gap-2`}>
            <CheckCircle className='h-9 w-9 flex-shrink-0' color="yellow" />
            <p className=" text-md sm:text-xl">{causa}</p>
        </div>
    )
}