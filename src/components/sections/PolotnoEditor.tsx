import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

const PolotnoEditor = () => {
  return (
    <div>
      <Editor />
      {/* <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style> */}
    </div>
  );
}

export default PolotnoEditor
