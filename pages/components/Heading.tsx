import React from "react"

type props = {
  text: string
}

export const Heading: React.VFC<props> = ({ text }) => {
  return <h1>{text}</h1>
}
