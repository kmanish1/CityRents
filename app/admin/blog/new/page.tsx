"use client"
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

interface AltText {
  cover_image: string;
  text_image: string[];
}

export default function Blog(){
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageData, setImageData] = useState<string | null>(null);
  const [author, setAuthor] = useState<string>("");
  const [altText, setAltText] = useState<AltText>({
    cover_image: "",
    text_image: [],
  });

//   const addAltText = (key: keyof AltText) => {
//     setAltText((prev) => ({
//       ...prev,
//       [key]: [...prev[key], ""],
//     }));
//   };

//   const handleAltTextChange = (
//     key: keyof AltText,
//     index: number,
//     value: string
//   ) => {
//     setAltText((prevState) => ({
//       ...prevState,
//       [key]: prevState[key].map((item, i) => (i === index ? value : item)),
//     }));
//   };

//   const removeAltText = (key: keyof AltText, index: number) => {
//     setAltText((prevState) => ({
//       ...prevState,
//       [key]: prevState[key].filter((item, i) => i !== index),
//     }));
//   };

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
    formData.append("summary", summary);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("image", imageData || "");
    const altTextJSON = JSON.stringify(altText);
    formData.append("altText", altTextJSON);

    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/submit-post`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Post created successfully");
        window.location.href = "/web-admin/posts/";
      } else {
        alert("Failed to create post");
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className=" ">
        <div className="bg-black w-full h-[100px]"></div>
        <div className=" grid grid-cols-12">
          <div className="col-span-10 overflow-y-scroll">
            <div className=" p-8">
              <form
                onSubmit={handleSubmit}
                className=" w-full flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Blog Title"
                  className=" w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  className=" w-full"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <h2 className="text-lg font-semibold mb-4">
                  Upload Cover Image
                </h2>
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

                <input
                  type="text"
                  placeholder="Cover Image Alt Text"
                  className="w-full"
                  onChange={(e) =>
                    setAltText((prevState) => ({
                      ...prevState,
                      cover_image: e.target.value,
                    }))
                  }
                />
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                ></ReactQuill>
                {/* {altText.text_image.map((feature, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Alt Text"
                      value={feature}
                      onChange={(e) =>
                        handleAltTextChange("text_image", index, e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="bg-red-500 text-white py-4 px-6"
                      onClick={() => removeAltText("text_image", index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-green-500 py-4 px-6 text-white"
                  onClick={() => addAltText("text_image")}
                >
                  Add Alt Text
                </button> */}
                <button
                  type="submit"
                  className=" py-3 px-3 rounded-md text-white bg-purple-600"
                >
                  Create Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


