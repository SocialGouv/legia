"use client"

import { createContext, useMemo, useState } from "react"

type FormDataContext = {
  formData: {
    status?: "loading" | "error"
    message?: string
  }
  setFormData: (formData: {
    status?: "loading" | "error"
    message?: string
  }) => void
}

export const FormDataContext = createContext<FormDataContext>({
  formData: {},
  setFormData: () => {},
})

export const FormDataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [formData, setFormData] = useState({})

  const value = useMemo(
    () => ({ formData, setFormData }),
    [formData, setFormData]
  )

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  )
}
