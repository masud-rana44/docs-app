import { ReactNode } from "react";

interface DocumentsLayoutProps {
  children: ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return <div>{children}</div>;
};

export default DocumentsLayout;
