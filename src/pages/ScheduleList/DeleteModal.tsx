import BaseButton from "../../components/Common/Buttons/BaseButton";
import useClickOutside from "../../hooks/useClickOutside";
import { DeleteModalStyle, ModalButtons, Overlay } from "./ScheduleListStyle";

const DeleteModal = ({ handleClose }:{ handleClose:()=>void }) => {
  const modalRef = useClickOutside<HTMLDivElement>(() => {
    handleClose();
  });

  return (
    <Overlay>
      <DeleteModalStyle ref={modalRef}>
        <p>Apakah anda yakin ingin menghapus schedule ini?</p>
        <ModalButtons>
          <BaseButton width="98px" height="41px" fontSize="14px" text="Batalkan" color="#F1F4FA" textColor="#3A36DB" radius="10px" onClick={handleClose}></BaseButton>
          <BaseButton width="98px" height="41px" text="Hapus" fontSize="14px"  color="#3A36DB" textColor="white" radius="10px"></BaseButton>
        </ModalButtons>
      </DeleteModalStyle>
    </Overlay>
  );
};

export default DeleteModal;
