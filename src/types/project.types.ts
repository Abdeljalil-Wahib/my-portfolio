// TypeScript types for project data
export type TechStack =
  | "nextjs"
  | "react"
  | "redux"
  | "sass"
  | "html"
  | "css"
  | "javascript"
  | "c"
  | "blender"
  | "tailwind"
  | "konva"
  | "socketio"
  | "typescript";

export type CardType = "portrait" | "landscape";

export interface Project {
  title: string;
  thumbnail: string;
  description: string;
  liveDemo: string;
  github: string;
  tech: TechStack[];
  cardType?: "portrait" | "landscape";
  embedCode?: string;
  imageRender?: string;
  videoPreview?: string;
}

export interface ProjectsData {
  projects: Project[];
}
