import { dataTable } from './setting';

const Project = () => {
  return (
    <div className="project-contain">
      <div className="header">
        <p>
          https://dedemy.tech https://dedemy.tech https://dedemy.tech
          https://dedemy.tech{' '}
        </p>
        <p>
          https://dedemy.tech https://dedemy.tech https://dedemy.tech
          https://dedemy.tech{' '}
        </p>
        <p>https://dedemy.tech https://dedemy.tech https://dedemy.tech</p>
      </div>
      <div className="table-tab-left mt-3">
        <table>
          <caption className="mb-1">Token Details</caption>

          {dataTable.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>
                <p className="color-blue">{data.data}</p>
              </td>
            </tr>
          ))}

          <tr>
            <td>Token Address</td>
            <td>
              <a
                className="color-blue-bold"
                style={{
                  textDecoration: 'underline',
                }}
                href="https://testnet.bscscan.com/token/0x56E4F14f6aB7d5Fc9eEE4b01CCdD761583F13B6F"
              >
                0x56E4F14f6aB7d5Fc9eEE4b01CCdD761583F13B6F
              </a>
              <p className="color-blue">
                Do not send $BUSD to the token address{' '}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Project;
