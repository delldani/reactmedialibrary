import * as React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

import ReactMediaLibraryTabs from "./ReactMediaLibraryTabs";
const ReactMediaLibrary = props => {
  return React.createElement(

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
      React.createElement("button", {
        children: "Close",
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
