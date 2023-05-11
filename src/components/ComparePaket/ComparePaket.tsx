import React from "react";
import styled from "styled-components";
import truepic from "../../assets/icon/true.png";
import falsepic from "../../assets/icon/false.png";
import protectpic from "../../assets/icon/ProteksiLogo.svg";
interface Package {
  paket: string;
  chat: string | JSX.Element;
  drugs: string | JSX.Element;
  lab: string | JSX.Element;
  outpatient: string | JSX.Element;
  inpatient: string | JSX.Element;
}

interface ComparePackagesProps {
  packages: Package[];
}

const ComparePackagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 1116px;
  height: 521px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    background: linear-gradient(
      180deg,
      #c9f3f5 0%,
      rgba(170, 230, 234, 0) 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  }
  td {
    border: 1px solid #62dae1;
    padding: 10px;
    text-align: center;
    height: 6.25rem;

    img {
      width: 37px;
      height: 40px;
    }
  }

  th {
    img {
      display: flex;
      width: 180px;
      height: 24px;
      align-items: flex-end;
    }
    p {
      width: 60px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(180deg, #69717b 0%, #90aad1 100%);
      font-weight: 500;
      font-size: 8px;
      line-height: 10px;
      padding: 5px;
      color: #fff;
      border-radius: 5px;
      margin-bottom: 23px;
    }
    button {
      border: 1px solid #c8d5e4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      padding: 8px 14px;
      margin-top: 9px;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      text-align: center;
      color: #505050;
      background-color: #fff;
      cursor: pointer;
    }
  }

  td:first-child,
  th:first-child {
    text-align: center;
  }
`;

const ComparePaket: React.FC<ComparePackagesProps> = ({ packages }) => {
  return (
    <ComparePackagesWrapper>
      <Table>
        <thead>
          <tr>
            <th></th>
            {packages.map((pkg) => (
              <th key={pkg.paket}>
                <img src={protectpic} alt="slivapic" />
                <p>{pkg.paket}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited Chat Dokter</td>
            {packages.map((pkg) => (
              <td key={pkg.paket}>
                {pkg.chat === truepic ? (
                  <img src={truepic} alt="true" />
                ) : (
                  <img src={falsepic} alt="falsepic" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Obat-obatan Cashless</td>
            {packages.map((pkg) => (
              <td key={pkg.paket}>
                {pkg.drugs === truepic ? (
                  <img src={truepic} alt="true" />
                ) : (
                  <img src={falsepic} alt="falsepic" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Tindakan Laboratorium</td>
            {packages.map((pkg) => (
              <td key={pkg.paket}>
                {pkg.lab === truepic ? (
                  <img src={truepic} alt="true" />
                ) : (
                  <img src={falsepic} alt="falsepic" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Rawat Jalan Cashless</td>
            {packages.map((pkg) => (
              <td key={pkg.paket}>
                {pkg.outpatient === truepic ? (
                  <img src={truepic} alt="true" />
                ) : (
                  <img src={falsepic} alt="falsepic" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Rawat Inap Cashless</td>
            {packages.map((pkg) => (
              <td key={pkg.paket}>
                {pkg.inpatient === truepic ? (
                  <img src={truepic} alt="true" />
                ) : (
                  <img src={falsepic} alt="falsepic" />
                )}
              </td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <th></th>
          <th>
            <button>Lihat Detail</button>
          </th>
          <th>
            <button>Lihat Detail</button>
          </th>
          <th>
            <button>Lihat Detail</button>
          </th>
        </tfoot>
      </Table>
    </ComparePackagesWrapper>
  );
};

export default ComparePaket;
