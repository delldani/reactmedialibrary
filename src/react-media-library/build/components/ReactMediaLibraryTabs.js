import * as React from "react";
import { Tab } from 'semantic-ui-react'
import FileUpload from "./FileUpload";
import FileLibrary from "./FileLibrary";



const UploadTab = (props)=>{
return(
            React.createElement("div", { className: "pt-3" },
                React.createElement(FileUpload, { fileUploadCallback: props.fileUploadCallback }))
);};

const LibraryTab = (props)=>{
    return(
        (Array.isArray(props.fileLibraryList) && props.fileLibraryList.length > 0) && 
        (React.createElement(FileLibrary, { fileLibraryList: props.fileLibraryList, fileSelectCallback: props.fileSelectCallback, fileDeleteCallback: props.fileDeleteCallback, libraryCardComponent: props.libraryCardComponent }))
    );
};

const panes = [
    { menuItem: 'Upload', render: UploadTab },
    { menuItem: 'Library', render:LibraryTab },
  ];
  
const ReactMediaLibraryTabs = (props) => <Tab panes={panes} {...props}/>
  

export default ReactMediaLibraryTabs;
// # sourceMappingURL=ReactMediaLibraryTabs.js.map