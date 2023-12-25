import { Card, Flex } from 'antd'
import LeftBlock from '../components/LeftBlock'
import RightBlock from '../components/RightBlock'

const MainPage = () => {

  return (
    <Card bordered={false} className='card-container'>
    <Flex className='main-container' gap="middle" horizontal>
      
      <LeftBlock />
      <div className='right-block'>
            <RightBlock />
            </div>
    </Flex>
  </Card>
  )
}

export default MainPage