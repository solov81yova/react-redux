import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokeSliceAction,
  randomJokeSliceSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  PageTitle,
  ButtonControl,
  RandomJokeText,
  RandomJokeContainer,
  RandomJokeCard,
} from "./styles"
/*
Cоздайте приложение "Random Joke" в копмоненте Homework_18

Требования:

Отобразите кнопку "Get Random Joke", при клике на которую, вы отправляете GET запрос на 
https://official-joke-api.appspot.com/random_joke и получаете обьект с шуткой
При нажатии на кнопку "Get Random Joke", кнопка дизеблится, до тех пор, пока не придут 
ожидаемые данные или ошибка
Если запрос был выполнен успешно, сохраняем данные в Redux стейте. Каждая шутка, которую вы получили, 
нужно хранить в массиве в виде обьекта, и при каждом новом запросе, вы должны, добавлять новую шутку в массив
Шутки должны распологаться над кнопкой "Get Random Joke"
Задание со звездочкой(только для тех кто хочет посложнее, кому сложно просто пропускайте этот пункт) 
Справа от каждой шутки, должна появляться кнопка "Delete Joke", при клике на которую, она удаляется
Когда поялвяется 1 шутка, у вас появляется кнопка "Delete All Jokes" и при клике на нее удаляются все шутки. 
Кнопка должна распологаться над всеми шутками
Если пришла ошибка, показывайте alert, с сообщением "Some Network error". Данные, которые вы клали в массив
 с шутками, не теряются
Примечания:

шутки должны храниться в Redux state, соответственно создание, удаление, тоже происходит через Redux
запрос нужно делть через Redux Thunk
стили на ваше усмотрение(можете взять дизайн с приложения Cat Facts)
*/
function Homework_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.jokes,
  )
  const getRandomJoke = () => {
    dispatch(randomJokeSliceAction.getJokes())
  }
  const deleteAllJokes = () => {
    dispatch(randomJokeSliceAction.deleteJokes())
  }
  const randomJokes = data.map((randomJoke: RandomJoke) => {
    return (
      <RandomJokeText
        key={randomJoke.id}
      >{`${randomJoke.setup}${randomJoke.punchline}`}</RandomJokeText>
    )
  })
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <PageTitle>Random Joke</PageTitle>
      {data.length > 0 && (
        <ButtonControl>
          <Button name="Delete All Jokes" onClick={deleteAllJokes} />
        </ButtonControl>
      )}
      <RandomJokeCard>
        {data.length > 0 && (
          <RandomJokeContainer>{randomJokes}</RandomJokeContainer>
        )}
        {error && <RandomJokeContainer>{error}</RandomJokeContainer>}
      </RandomJokeCard>
      <ButtonControl>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </ButtonControl>
    </PageWrapper>
  )
}

export default Homework_17
