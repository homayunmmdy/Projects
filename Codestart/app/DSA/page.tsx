import React from 'react'
import DSACards from './components/cards/DSACards'
import Alert from '@/components/alert/Alert'

const DSAPage = () => {
  return (
    <div>
      <Alert type='info' title='The term DSA stands for Data Structures and Algorithms, in the context of Computer Science' />
      <DSACards />
    </div>
  )
}

export default DSAPage
