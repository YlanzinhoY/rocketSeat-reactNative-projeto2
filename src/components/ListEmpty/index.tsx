import * as Style from './style'

type Props = {
    message: string
}

export function ListEmpty({ message }: Props){
    return(
        <Style.Container>
            <Style.Message>
                { message }
            </Style.Message>
        </Style.Container>
    )
}