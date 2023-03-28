export type JsonDocument = {[key: string]: Document}
  export interface Document {
    title: string;
    description: string;
    chapters: ChaptersEntity[];
  }
  export interface ChaptersEntity {
    title: string;
    content: string;
  }
  