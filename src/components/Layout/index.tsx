import React, { FC } from 'react'
import Footer from '@/components/UI/Footer'
import Header from '@/components/UI/Header'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
