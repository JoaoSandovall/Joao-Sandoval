export type Page =
  | { id: "home" }
  | { id: "notes" }
  | { id: "note"; slug: string }
  | { id: "project"; slug: string };
