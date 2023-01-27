import * as Style from './styled'

type Props = {
    title: string
    subtitle: string
}

export function Highlight({title, subtitle}:Props ) {
    return(
        <Style.Container>
            <Style.Title >
                {title}
            </Style.Title>

            <Style.SubTitle>
                {subtitle}
            </Style.SubTitle>
        </Style.Container>
    )
}