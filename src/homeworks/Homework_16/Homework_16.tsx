import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"
import Feedback from "components/Feedback/Feedback"

import { PageWrapper } from "./styles"
/*
Скопируйте компонент Feedback из папки components из моего проекта "react-typescript-cohort42-1"
(ссылку на него я приложил вам в нашу группу в сообщении в слаке) в ваш новый Vite проект в папку components

Cоздайте компонент Homework_16 и отобразите там компонент Feedback посередине страницы

Требования:
При нажатии на кнопку “Like” - количество лайков увеличивается на 1
При нажатии на кнопку “Dislike” - количество дизлайков увеличивается на 1
При нажатии на кнопку “Reset Results” - колличество лайков и дизлайков обнуляется
используйте Redux для хранения состояния и управления этим состоянием. Смотрите как мы делали Counter и сделайте по аналогии
*/

function Homework_16() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.like)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }
  
  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResult(0))
  }
  return (
    <PageWrapper>
      <Feedback
        likes={likes}
        dislikes={dislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}
export default Homework_16
