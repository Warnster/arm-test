import { Navigate, useParams } from "react-router-dom"
import { getDocument, getFirstChapter } from "../../utils";

export const DocumentRedirect = () => {
    const {documentId} = useParams();
    const chapterTitle = getFirstChapter(getDocument(documentId as string)).title
    return (
        <Navigate to={`/${documentId}/${chapterTitle}`} />
    )
}