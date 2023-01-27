import { TouchableOpacityProps } from 'react-native'
import * as Style from './styles'

interface Props extends TouchableOpacityProps{
    title: string
}

export function GroupCard({ title, ...rest}: Props) {
    return(
        <Style.Container {...rest}>
            <Style.Icon />
            <Style.Title>
                {title}
            </Style.Title>
        </Style.Container>
    )
}