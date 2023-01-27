import { TouchableOpacityProps } from 'react-native'
import * as Style from './style'

interface Props extends TouchableOpacityProps {
    title: string
    type?: Style.ButtonTypeStyleProps
}

export function Button({title, type = 'SUCCESS', ...rest}: Props) {
    return(
        <Style.Container type={type}  {...rest} >
            <Style.Title >
                {title}
            </Style.Title>
        </Style.Container>
    )
}