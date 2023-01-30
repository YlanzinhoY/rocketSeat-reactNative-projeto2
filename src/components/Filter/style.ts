import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({theme, isActive}) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}

    border-radius: 4px;
    margin-right: 12px;

    height: 40px;
    width: 75px;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    text-transform: uppercase;
    text-align: center;
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `}

`