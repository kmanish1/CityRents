"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function Blog() {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [imageData, setImageData] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  const handleCoverImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImageData(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCoverImage = () => {
    setImageData(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("image", imageData || "");
    formData.append("content", content);

    try {
      const response = await fetch(`/api/blog`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Post created successfully");
      } else {
        alert("Failed to create post");
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center flex-wrap items-center p-12">
      <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          className=" w-full"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <h2 className="text-lg font-semibold mb-4">Upload Cover Image</h2>
        {imageData && (
          <div className="flex items-center space-x-4">
            <img
              src={imageData}
              alt="Uploaded"
              className="w-20 h-20 object-cover"
            />
            <button
              type="button"
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleRemoveCoverImage}
            >
              Remove
            </button>
          </div>
        )}

        <input
          onChange={handleCoverImageUpload}
          type="file"
          accept="image/*"
          name="image"
        ></input>

        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        ></ReactQuill>
        <button
          type="submit"
          className=" py-3 px-3 rounded-md text-white bg-purple-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
