import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get all the mdx files
const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

// read data from the files
const readMDXFiles = (filePath: fs.PathOrFileDescriptor) => {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
};

// present the mdx data and meta data
const getMDXData = (dir: string) => {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFiles(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
};

export const getBlogPosts = () => {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "content"));
};

export const formatDate = (date: string) => {
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let fullDate = targetDate.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return fullDate;
};
