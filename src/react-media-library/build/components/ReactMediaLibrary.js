import * as React from "react";
// import Modal from "react-bootstrap/Modal";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

import ReactMediaLibraryTabs from "./ReactMediaLibraryTabs";
const ReactMediaLibrary = props => {
  return React.createElement(
    // Modal,
    // {
    //   size: "xl",
    //   show: props.show,
    //   onHide: props.onHide,
    //   id: "react-media-library-modal",
    //   "aria-labelledby": "react-media-library-modal"
    // },
    // React.createElement(
    //   Modal.Header,
    //   { closeButton: true },
    //   React.createElement(Modal.Title, null, props.modalTitle)
    // ),
    // React.createElement(
    //   Modal.Body,
    //   null,
    //   React.createElement(ReactMediaLibraryTabs, {
    //     fileLibraryList: props.fileLibraryList,
    //     fileUploadCallback: props.fileUploadCallback,
    //     fileSelectCallback: props.fileSelectCallback,
    //     fileDeleteCallback: props.fileDeleteCallback,
    //     libraryCardComponent: props.libraryCardComponent
    //   })
    // )

    Modal,
    {
      size: "large",
      open: props.show,
      onClose: props.onHide,
      id: "react-media-library-modal"
    },
    React.createElement(Header, {
      content: props.modalTitle
    }),
    React.createElement(
      Modal.Content,
      null,
      React.createElement(ReactMediaLibraryTabs, {
        fileLibraryList: props.fileLibraryList,
        fileUploadCallback: props.fileUploadCallback,
        fileSelectCallback: props.fileSelectCallback,
        fileDeleteCallback: props.fileDeleteCallback,
        libraryCardComponent: props.libraryCardComponent
      })
    ),
    React.createElement(
      Modal.Actions,
      null,
      React.createElement(Button, {
        label: "Close",
        onClick: props.onHide
      })
    )
  );
};
ReactMediaLibrary.defaultProps = {
  modalTitle: "Media Library"
};
export default ReactMediaLibrary;
//# sourceMappingURL=ReactMediaLibrary.js.map
