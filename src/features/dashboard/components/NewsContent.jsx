import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const modules = {
  toolbar: toolbarOptions,
};
const NewsContent = ({ newsContent, newsContentHandler }) => {
  const [content, setContent] = useState("");

  return (
    <div className="flex  w-full p-px  font-[300] min-h-[200px]">
      <ReactQuill
        className="w-full"
        theme="snow"
        value={newsContent}
        onChange={(newValue) => {
          console.log(newValue);
          newsContentHandler(newValue);
        }}
        modules={modules}
      ></ReactQuill>
    </div>
  );
};

export default NewsContent;
