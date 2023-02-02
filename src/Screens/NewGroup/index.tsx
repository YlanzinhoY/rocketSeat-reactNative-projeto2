import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import * as Style from './styles'


export function NewGroup() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('players', { group })
    }

    return(
        <Style.Container>
            <Header showBackButton/>
            <Style.Content >
                <Style.Icon />
                <Highlight title='Nova Turma' 
                    subtitle='Crie a turma para adicionar as pessoas'/>
                <Input  placeholder='nome da turma' onChangeText={setGroup}/>
                <Button onPress={handleNew} title='Criar' style={{marginTop: 20}} />
            </Style.Content>
        </Style.Container>
    )
}