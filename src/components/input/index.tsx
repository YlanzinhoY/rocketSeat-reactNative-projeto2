import * as Style from './styles'

import { useTheme } from 'styled-components/native'

import { TextInputProps } from 'react-native'

export function Input({...rest}:TextInputProps ) {

    const { COLORS } = useTheme()


    return(
        <Style.Container placeholderTextColor={COLORS.WHITE}  {...rest}/>
    )
} 