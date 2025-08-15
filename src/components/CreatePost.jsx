import React, { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef();
  const fileInputRef = useRef();

  const handleTextChange = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
    fileInputRef.current.value = null;
  };

  const applyFormat = (format) => {
    const cursor = textareaRef.current.selectionStart;
    let newText;
    switch (format) {
      case "bold":
        newText = text.slice(0, cursor) + "**" + text.slice(cursor) + "**";
        break;
      case "italic":
        newText = text.slice(0, cursor) + "*" + text.slice(cursor) + "*";
        break;
      case "underline":
        newText = text.slice(0, cursor) + "__" + text.slice(cursor) + "__";
        break;
      default:
        return;
    }
    setText(newText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && !image) return alert("Please add a caption or image.");

    const formData = new FormData();
    formData.append("caption", text);
    if (image) formData.append("image", image);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/post/create", {
        method: "POST",
        body: formData,
        credentials: "include", // if using session/auth
      });

      const data = await response.json();
      if (data.success) {
        alert("Post created successfully!");
        setText("");
        removeImage();
      } else {
        alert("Failed to create post: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error creating post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow overflow-hidden p-4 rounded-lg">
      <div className="flex items-center justify-between border-b-[0.5px] border-gray-300 p-4 pb-4 mb-4">
        <CgClose className="cursor-pointer text-lg" />
        <span>Create post</span>
        <button
          onClick={handleSubmit}
          className="font-semibold"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>

      {/* Formatting Toolbar */}
      <div className="flex gap-2 px-4 mb-2">
        <button
          type="button"
          className="px-2 py-2 border-[0.5px] border-gray-500 text-primary rounded hover:opacity-80"
          onClick={() => applyFormat("bold")}
        >
          <FaBold />
        </button>
        <button
          type="button"
          className="px-2 py-2 border-[0.5px] border-gray-500 text-primary rounded hover:opacity-80"
          onClick={() => applyFormat("italic")}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          className="px-2 py-2 border-[0.5px] border-gray-500 text-primary rounded hover:opacity-80"
          onClick={() => applyFormat("underline")}
        >
          <FaUnderline />
        </button>
      </div>

      {/* Caption Section */}
      <div className="flex flex-col gap-4 mb-4 px-4">
        <textarea
          ref={textareaRef}
          className="w-full focus:outline-none bg-transparent resize-none"
          rows={5}
          placeholder="Write a caption..."
          value={text}
          onChange={handleTextChange}
        />
      </div>

      {/* Image Section */}
      {preview ? (
        <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden p-4">
          <img
            src={preview}
            alt="Preview"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black"
          >
            <CgClose />
          </button>
        </div>
      ) : (
        <div className="px-4">
          <button
            type="button"
            className=""
            onClick={() => fileInputRef.current.click()}
          >
            <IoImageOutline className="text-2xl" />
          </button>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default CreatePost;
