import React from "react";
import { Label } from 'semantic-ui-react'
function renderBadge(status) {
    switch (status) {
        case -1:
            return (React.createElement(Label, { color: "red" }, "Failed"));
        case 0:
            return (React.createElement(Label, { color: "yellow" }, "Processing"));
        case 1:
            return (React.createElement(Label, { color: "green" }, "Success"));
    }
    return;
}
const FileUploadList = (props) => {
    function renderList() {
        return props.fileUploadList.map((element, index) => {
            return (React.createElement("li", { key: index, className: "list-group-item d-flex justify-content-between align-items-center" },
                element.fileName,
                renderBadge(element.status)));
        });
    }
    return (React.createElement(React.Fragment, null,
        (props.fileUploadList.length > 0) && (React.createElement("h3", null, "Uploaded Files")),
        React.createElement("ul", { className: "list-groups p-0" }, renderList())));
};
export default FileUploadList;
//# sourceMappingURL=FileUploadList.js.map