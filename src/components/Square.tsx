import React, {FC} from "react";
//
import css from "../styles/square.module.scss"

interface Props {
    id: string;
}

const Square: FC<Props> = ({id}) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log((e.target as Element).id)
    }


    return <div id={id} className={css["square"]} onClick={handleClick}/>
}
export default Square;