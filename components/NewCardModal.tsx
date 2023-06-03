import React from "react";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
};

import cn from "classnames";

const NewCardModal: React.FC<ModalProps> = ({
  children,
  open,
}) => {

  const modalClasses = cn("modal modal-bottom sm:modal-middle", {
    "modal-open": open,
  });
  
  return (
    <div className={modalClasses}>
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default NewCardModal;