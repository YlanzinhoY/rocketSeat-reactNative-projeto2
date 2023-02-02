import * as Style from './styles'
import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('groups')
    }
    return(
        <Style.Container>
            {
            showBackButton &&
            <Style.BackButton onPress={handleGoBack}>
                <Style.BackIcon />
            </Style.BackButton>
            }
            <Style.Logo source={logoImg}/>
        </Style.Container>
    )
}