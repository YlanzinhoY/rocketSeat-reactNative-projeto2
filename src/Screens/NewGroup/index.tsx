import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import * as Style from './styles'


export function NewGroup() {
    return(
        <Style.Container>
            <Header showBackButton/>
            <Style.Content >
                <Style.Icon />
                <Highlight title='Nova Turma' 
                subtitle='Crie a turma para adicionar as pessoas'/>
                <Input  placeholder='nome da turma'/>
                <Button title='Criar' style={{marginTop: 20}} />
            </Style.Content>
        </Style.Container>
    )
}