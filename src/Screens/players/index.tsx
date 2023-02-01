import { Button } from '@components/Button'
import { ButtonIcon } from '@components/buttonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { ListEmpty } from '@components/ListEmpty'
import { PlayerCard } from '@components/PlayerCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import * as Style from './style'

export function Players() {
    const [team, setTeam] = useState('time A')
    const [players, setPlayers] = useState(['Enzo'])

    return(
        <Style.Container>
            <Header showBackButton/>

            <Highlight title='Nome da turma'
             subtitle='adicione a galera e separe os times'/> 

            <Style.Form > 
                <Input placeholder='Nome da Pessoa' autoCorrect={false}/>
                <ButtonIcon icon='add' type='PRIMARY' />
            </Style.Form>

           <Style.HeaderList> 
                <FlatList 
                    data={['Time a', 'time b']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter title={item} 
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <Style.NumbersOfPlayers>
                    {players.length}
                </Style.NumbersOfPlayers>
           </Style.HeaderList>
                <FlatList 
                    data={players}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <PlayerCard name={item} onRemove={() => { }}/>
                    )}
                    ListEmptyComponent={() =>( 
                        <ListEmpty message="Não há pessoas nesse time"/> 
                        )}
                        contentContainerStyle={[
                            {paddingBottom: 100},
                            players.length === 0 && {flex: 1}
                        ]}
                    showsVerticalScrollIndicator={false}
                />
                <Button title='Remover Turma' type='DANGER'/>

        </Style.Container> 
    )
}