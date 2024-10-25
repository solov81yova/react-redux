import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 470px;
  height: fit-content;
  border: 1px solid #000000;
  padding: 40px;
  border-radius: 8px;
  background-color: ${colors.WHITE};
  gap: 20px;
  margin: 20px;
  box-sizing: border-box;
`

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  padding-top: 10px;
  color: ${colors.PRIMARY};
  text-align: left;
`

export const CardLabel = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: ${colors.PRIMARY};
`

export const UsersNotFound = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`
export const ButtonControl = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  box-sizing: border-box;
`
