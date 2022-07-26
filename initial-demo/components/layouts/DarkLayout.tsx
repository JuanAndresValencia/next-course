import React, { FC } from "react"

interface Props {
  children: React.ReactNode
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'gray',
      borderRadius: '5px',
      padding: '10px'
    }}>
      <div>
        {children}
      </div>
    </div>
  )
}