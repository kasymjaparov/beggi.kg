import Header from "@/widgets/Header"
import Head from "next/head"
import React from "react"
import WithHeadLayout from "./withHead"

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Header />
      <WithHeadLayout title={title}>{children}</WithHeadLayout>
    </>
  )
}

export default MainLayout
