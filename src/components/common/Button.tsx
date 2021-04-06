import {FC} from "react";

interface Props {
    name: string
}

const Button: FC<Props> = ({name}) => {
    return <button type="button">{name}</button>
}

export default Button