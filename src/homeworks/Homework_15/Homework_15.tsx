import { useState } from "react"

import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"

import { PageWrapper, ButtonControl, InputComponent } from "./styles"

function Homework_15() {
  const [count, setCount] = useState<number>(0)

  const onMinus = (): void => {
    setCount((prevValue: number) => prevValue - 1)
  }

  const onPlus = (): void => {
    setCount((prevValue: number) => prevValue + 1)
  }
  return (
    <PageWrapper>
      <InputComponent>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
      </InputComponent>
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      <ButtonControl>
        <Button type="submit" name="Create" />
      </ButtonControl>
    </PageWrapper>
  )
}
export default Homework_15
