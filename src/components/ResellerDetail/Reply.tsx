import React from "react";
import { Reply as IReply } from "../../types/typings";
import { ReplyWrapper } from "./ResellerDetailStyled";
import moment from "moment";
interface ReplyProps {
  reply: IReply;
}
const Reply: React.FC<ReplyProps> = ({ reply }) => {
  return (
    <ReplyWrapper>
      <img src={reply.replyImage} />
      <div className="reply-content">
        <h3>{reply.replyName}</h3>
        <div className="info">
          {reply.isOwner ? <div className="owner-badge">Penjual</div> : null}
          <p>{moment(reply.createdAt).fromNow()}</p>
        </div>
        <p>{reply.replyContent}</p>
      </div>
    </ReplyWrapper>
  );
};

export default Reply;
