import * as Style from './styles'

import logoImg from '@assets/logo.png'

export function Header() {
    return(
        <Style.Container>
            <Style.Logo source={logoImg}/>
        </Style.Container>
    )
}