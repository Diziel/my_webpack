import React from 'react'
import { observer } from 'mobx-react'
import {mobTest} from '../../stores/MobTest.js'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Button } from 'antd'

const Mob = observer(() => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MobX Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div style={{marginTop: 50}}>
        <Button onClick={() => mobTest.increase()}>Прибавить</Button>
        <Button onClick={() => mobTest.decrease()}>Убавить</Button>
        <Button onClick={() => mobTest.reset()}>Сбросить</Button>
        <div>{mobTest.number}</div>
      </div>
    </HelmetProvider>
  )
})

export default Mob
