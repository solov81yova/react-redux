import { ReactNode } from "react";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface UserData {
  id: string
  name: string
  surname: string
  age: string
  jobPosition: string
}
export interface EmployeeInitialState {
  userData: UserData[]
  error: undefined | string
  isLoading: boolean
}