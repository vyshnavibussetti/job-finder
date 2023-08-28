import React from "react";
import { Modal, Typography, Result } from "antd";

const ErrorModal = (props: any) => {
 return (
    <Modal
        title="Error"
        style={{ top: 20 }}
        open={true}
        onOk={() => props.closeErrorModal()}
        onCancel={() => props.closeErrorModal()}
      >
        <Result
            status="error"
            title="There are some problems with your operation."
            
        />
    </Modal>
 )
}

export default ErrorModal;
