import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getChapterByTitle, getDocument } from "../../utils";

export const Document = () => {
  const { documentId, chapterTitle: chapterTitleParam } = useParams();
  const chapterTitle = chapterTitleParam as string;
  const document = getDocument(documentId as string);
  const chapter = getChapterByTitle(document, chapterTitle);
  console.log({chapter, document})
  return (
    <div className="h-screen">
      <div className="grid grid-cols-document gap-4 h-full" >
        <div className="bg-gray-200">
          {document.chapters.map((chapter) => {
            const isActive = chapter.title.includes(chapterTitle);
            return (
              <h2
              key={chapter.title}
                className={`text-2xl ${
                  isActive ? "text-blue-800" : "text-blue-500"
                } mb-4`}
              >
                <Link to={`/${documentId}/${chapter.title}`}>{chapter.title}</Link>
              </h2>
            );
          })}
        </div>
        <div>
            <iframe className="h-full" src={`/public/storage/${chapter.content}`}></iframe>
        </div>
      </div>
    </div>
  );
};
