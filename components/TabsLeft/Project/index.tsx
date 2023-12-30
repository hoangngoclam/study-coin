import { dataTable } from './setting';

const Project = () => {
  return (
    <div className="project-contain">
      <div className="header">
        <p>
          Studily is eLearning has become quite a trend these days, especially
          after the pandemic hit our society hard. We are witnessing a change in
          the way our information system works. Are we shifting toward a fully
          digital education, and what are the benefits of moving to Web 3.0.
        </p>
        <b>1. Great eLearning Data Integrity</b>
        <p>
          When it comes to data integrity, blockchain technology is an excellent
          way to make sure that all the information you need is provided.
          Instead of a single center of truth, blockchains ensure that multiple
          blockchain-based data streams are resilient and verified to ensure
          data doesn't fall into the wrong hands. This means your learning
          materials will be verified and not tampered with. The security of the
          data is very important for the success of any student program.
        </p>
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
