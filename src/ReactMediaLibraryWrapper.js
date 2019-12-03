import React, { useEffect, useState } from "react";
import {
  FileLibraryListItem,
  ReactMediaLibrary,
  FileMeta
} from "react-media-library";

const ReactMediaLibraryWrapper = () => {
  const [display, setDisplay] = useState(false);
  const [fileLibraryList, setFileLibraryList] = useState([]);

  useEffect(() => {
    // TODO Get file list from database
    setFileLibraryList([
      {
        _id: 1,
        title: "Me and my dog",
        size: 294880,
        fileName: "a546.jpg",
        type: "image/jpeg",
        createdAt: new Date("2019-10-17T03:12:29.866Z"),
        thumbnailUrl:
          "https://kep.cdn.indexvas.hu/1/0/3060/30609/306093/30609377_ee10868de7d406503a1e343486004d9f_wm.jpg"
      },
      {
        _id: 2,
        title: "2019 Summer Vacation",
        size: 864483,
        fileName: "201702.jpg",
        type: "image/jpeg",
        createdAt: new Date("2019-10-17T03:12:45.018Z"),
        thumbnailUrl: "C:/Users/delld/Pictures/Áron 2019.11/550.jpg"
      },
      {
        _id: 3,
        title: "Our new baby",
        size: 586458,
        fileName: "271092.jpg",
        type: "image/jpeg",
        createdAt: new Date("2019-10-17T03:19:33.498Z"),
        thumbnailUrl: "C:/Users/delld/Pictures/Áron 2019.11/553.jpg"
      },
      {
        _id: 4,
        title: "My new car",
        size: 894665,
        fileName: "photo-107.jpg",
        type: "image/jpeg",
        createdAt: new Date("2019-10-17T03:28:39.723Z"),
        thumbnailUrl:
          "https://kep.index.hu/1/0/3061/30613/306132/30613229_43a64c459f313160139ff9e5fc09ff67_q.jpg"
      }
    ]);
  }, []);

  async function uploadCallback(fileBase64, fileMeta) {
    // // TODO Upload file to backend APIs
    // const result = await fileUpload(fileBase64, fileMeta);

    // if (result.success) {
    //   // New file uploaded
    //   // TODO Reacquire new file list from database
    //   const newFileList = await getNewFileList();
    //   setFileLibraryList(newFileList);

    //   // Return true to display upload success in modal
    //   return true;
    // } else {
    //   // Return false to display upload failed in modal
    //   return false;
    // }
    return true;
  }

  function selectCallback(item) {
    // // Hide modal
    // setDisplay(false);
    // // TODO Pass selected file back to client component callback function
    // clientSelectCallback(item);
  }

  async function deleteCallback(item) {
    // // TODO Delete file from backend service
    // const result = await fileDelete(item);
    // if (result.success) {
    //   // Deleted file
    //   // TODO Reacquire file list from database
    //   const newFileList = await getNewFileList();
    //   setFileLibraryList(newFileList);
    // }
  }

  return (
    <React.Fragment>
      <button onClick={() => setDisplay(true)}>Open React Media Library</button>
      <ReactMediaLibrary
        show={display}
        onHide={() => setDisplay(false)}
        fileUploadCallback={uploadCallback}
        fileLibraryList={fileLibraryList}
        fileSelectCallback={selectCallback}
        fileDeleteCallback={deleteCallback}
      />
    </React.Fragment>
  );
};

export default ReactMediaLibraryWrapper;
