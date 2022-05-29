import React from 'react'
import { render } from 'react-dom'
import 'fabric-webpack'

import DesignCanvas from './DesignCanvas'
import Rect from './Rect'
import Circle from './Circle'
import Image from './Image'

const App = () => (
  <div>
    <DesignCanvas>
      <Rect width={100} height={100} fill="blue" />
      <Circle radius={20} top={200} />
      <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sMv9G9t7jHgxRN3tiLjbg0zgCOJLjzkr6lldqUGZZdIFQczpduoiMiK99mCmbF0E9eA&usqp=CAU" scale={0.9} top={100} />
    </DesignCanvas>
  </div>
)

render(<App />, document.getElementById('root'))
