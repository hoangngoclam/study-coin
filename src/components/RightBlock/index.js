import { Alert, Button, Flex, InputNumber, Progress } from 'antd';

const RightBlock = () => {
  return (
    <div>
      <table>
        <tr>
          <td colSpan={2}>
            <Alert message='Informational Notes' type='info' showIcon />
          </td>
        </tr>
        <tr>
          <td>
            <span>SELTYPE:</span>
            <br />
            Public
          </td>
          <td>
            <span>START TIME</span>
            <br />
            03:14:30:39
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            PROGRESS BAR:
            <Progress percent={0} showInfo={false} />
            <Flex justify='space-between'>
              <p>0 BUSD</p>
              <p>5,000 BUSD</p>
            </Flex>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <span>BUSD SPENT</span> <br />0 BUSD
          </td>
        </tr>
        <tr>
          <td>
            Amount (BUSD)
            <br />
            <InputNumber min={1} max={10} defaultValue={3} />
            <b className='color-blue-bold text-underline cursor'>Max</b>
            <br />
            <Button className='btn-green  mt-1'>Connect Wallet</Button>
          </td>
        </tr>

        <tr>
          <td>
            <span>MIN BUY:</span>
            <br />
            0.001 BUSD
          </td>

          <td>
            <span>TOTAL RAISED:</span>
            <br />0 BUSD
          </td>
        </tr>
        <tr>
          <td>
            <span>CURRENT RATE:</span>
            <br />1 BUSD = 200 STY3
          </td>
        </tr>
      </table>
    </div>
  );
};

export default RightBlock;
