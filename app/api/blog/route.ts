import { NextRequest, NextResponse } from "next/server";

import { v2 as cloudinary } from "cloudinary";

import cheerioModule from "cheerio";
import BlogTable from "./db";

cloudinary.config({
  cloud_name: "dbe4r5mep",
  api_key: "889519336515641",
  api_secret: "MKx40Z2QYku1BokxfAe45JrhwTc",
});

async function upload(img_data: any) {
  try {
    const uploadResult = await cloudinary.uploader.upload(img_data);
    return uploadResult.secure_url;
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const title = data.get("title") as string;
    const author = data.get("author") as string;
    const image = data.get("image") as string;
    const content = data.get("content") as string;

    const imageLink = await upload(image);

    const $ = cheerioModule.load(content);
    const imgTags = $("img");

    for (const element of Array.from(imgTags)) {
      const imgSrc = $(element).attr("src");
      if (imgSrc && imgSrc.startsWith("data:image/")) {
        const url = await upload(imgSrc);
        $(element).attr("src", `${url}`);
      }
    }

    const updateContent = $.html();
    await BlogTable.create({
      title,
      author,
      cover_image: imageLink,
      content: updateContent,
    });

    return NextResponse.json(
      { message: "Post created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  var data = await BlogTable.find({});
  return NextResponse.json(data);
}

function PUT() {
  // update the blogs
}

function DELETE() {
  // delete blog
}
