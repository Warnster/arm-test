import documentJson from '../documents.json';
import { JsonDocument, Document, ChaptersEntity } from './types';

const documents = documentJson as unknown as JsonDocument;
    
export const getDocuments = () => {
    return Object.entries(documents).map(([id, document]) => ({ ...document, id }))
}

export const getDocument = (id: string) => {
    return documents[id];
};

export const getFirstChapter = (document: Document) => {
    return document.chapters[0];
}

export const getChapterByTitle = (document: Document, title: string) => {
    return document.chapters.find(chapter => chapter.title.includes(title)) as ChaptersEntity;
}