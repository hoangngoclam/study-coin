import {
  Alert,
  Button,
  Flex,
  InputNumber,
  Progress,
  Spin,
  message,
} from 'antd';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { useState } from 'react';

const RightBlock = () => {
  const [money, setMoney] = useState<number>(0);

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: '0x25bF384B26E206Ae20A0ea51D524a2C111520240',
    value: parseEther(money.toString()),
  });

  const [messageApi, contextHolder] = message.useMessage();

  const handleContribute = () => {
    sendTransaction();
  };

  const onMoneyChange = (value: any) => {
    if (!value) {
      value = 0;
    }
    setMoney(value);
  };

  if (isSuccess && data) {
    messageApi.success('Contribute success');
  }

  return (
    <div>
      {contextHolder}
      <table>
        <tr>
          <td colSpan={2}>
            <Alert message="Informational Notes" type="info" showIcon />
            <br />
            <ConnectButton />
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
            <Flex justify="space-between">
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
            <InputNumber
              id="money-input"
              min={0.1}
              max={10}
              onChange={onMoneyChange}
            />
            {/* <b className="color-blue-bold text-underline cursor">Max</b> */}
            <br />
            <Button
              className="btn-green mt-1"
              onClick={() => handleContribute()}
            >
              {isLoading ? (
                <span>
                  <Spin />
                  <span className="ml-1">Check Wallet</span>
                </span>
              ) : (
                'Contribute'
              )}
            </Button>
          </td>
          {/* <td>
            Amount (BUSD)
            <br />
            <InputNumber min={1} max={10} defaultValue={3} />
            <b className='color-blue-bold text-underline cursor'>Max</b>
            <br />
            <Button className='btn-green  mt-1'>Connect Wallet</Button>
          </td> */}
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
