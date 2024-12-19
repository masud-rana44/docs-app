import { Editor } from "./Editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="bg-[#F9FBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
