import React, { useState } from "react";
import topUp from "../../assets/icon/topUp.svg";
import tarik from "../../assets/icon/tarik-tunai.svg";
import {
  AppContainer,
  Card,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalButton,
  ModalCloseButton,
  Modal,
  ModalFooter,
} from "./PopUpTranksaksiStyle";
import iconMoney from "../../assets/icon/money.svg";

interface ICard {
  id: number;
  total: any;
  title: string;
  btn: any;
}

interface IModal {
  isOpen: boolean;
  type: string;
  onClose?: () => void;
}

const PopUpTranksaksi: React.FC = () => {
  const [modal, setModal] = useState<IModal>({ isOpen: false, type: "" });
  const [topUpAmount, setTopUpAmount] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const jobAp = [
    {
      id: 1,
      total: 16,
      title: "Total Transaksi",
      btn: [
        {
          text: "View Detail",
        },
      ],
    },
    {
      id: 2,
      total: 59,
      title: "Total Konsultasi",
      btn: [
        {
          text: "View Detail",
        },
      ],
    },
    {
      id: 3,
      total: "Rp.2.000.000",
      title: "Saldo",
      btn: [
        {
          text: "TopUp",
          icon: topUp,
          onClick: () => setModal({ isOpen: true, type: "topUp" }),
        },
        {
          text: "Tarik Tunai",
          icon: tarik,
          onClick: () => setModal({ isOpen: true, type: "tarikTunai" }),
        },
      ],
    },
  ];

  function Cards(props: ICard) {
    return (
      <Card onClick={() => console.log(props.title)}>
        <div className="text">
          <img src={iconMoney} alt="Money Icon" />
          <div>
            <h1>{props.total}</h1>
            <span>{props.title}</span>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          {props.btn.map((button: any, index: number) => (
            <button className="btn-card" key={index} onClick={button.onClick}>
              {button.text}
              {button.icon ? <img src={button.icon} alt={button.text} /> : ""}
            </button>
          ))}
        </div>
      </Card>
    );
  }

  function handleTopUp() {
    console.log("Top up with amount: ", topUpAmount);
    setModal({ isOpen: false, type: "" });
  }

  function handleTarikTunai() {
    console.log("Tarik tunai");
    setModal({ isOpen: false, type: "" });
  }
  function handleCloseModal() {
    setModal({ isOpen: false, type: "" });
  }

  return (
    <AppContainer>
      <div style={{ display: "flex", gap: "33px" }}>
        {jobAp.map((i: ICard) => (
          <Cards id={i.id} total={i.total} title={i.title} btn={i.btn} />
        ))}
      </div>
      {modal.isOpen && (
        <ModalContainer onClick={modal.onClose}>
          <Modal>
            <ModalHeader>
              {modal.type === "topUp" ? "Top Up" : "Tarik Tunai"}
            </ModalHeader>
            <ModalContent>
              {modal.type === "topUp" ? (
                <>
                  <label>input nominal</label>
                  <input
                    type="number"
                    value={topUpAmount}
                    onChange={(e) => setTopUpAmount(parseInt(e.target.value))}
                  />
                </>
              ) : (
                <>
                  <label>input nominal</label>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) =>
                      setWithdrawAmount(parseInt(e.target.value))
                    }
                  />
                </>
              )}
            </ModalContent>
            <ModalFooter>
              <ModalCloseButton onClick={handleCloseModal}>
                Batalkan
              </ModalCloseButton>
              <ModalButton
                onClick={
                  modal.type === "topUp" ? handleTopUp : handleTarikTunai
                }
              >
                {modal.type === "topUp" ? "Bayar" : "Lanjut"}
              </ModalButton>
            </ModalFooter>
          </Modal>
        </ModalContainer>
      )}
    </AppContainer>
  );
};

export default PopUpTranksaksi;
