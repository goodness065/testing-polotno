import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
// import { useInfiniteAPI } from "polotno/utils/use-api";
import { useInfiniteAPI } from "polotno/utils/use-api";

import { SectionTab } from "polotno/side-panel";
// import MdPhotoLibrary from "@meronex/icons/md/MdPhotoLibrary";

import { ImagesGrid } from "polotno/side-panel/images-grid";
//@ts-ignore
export const TemplatesPanel = observer(({ store }) => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const storeTemplate = localStorage.getItem("design");
      if (storeTemplate) {
        const designs = JSON.parse(storeTemplate);
        const templateArray = Object.keys(designs).map((key) => ({
          id: key,
          ...designs[key],
        }));

        console.log("templateArray", templateArray);
        // @ts-ignore
        setTemplates(designs.pages);
      }
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <ImagesGrid
        shadowEnabled={false}
        images={templates.map(template => ({
            //@ts-ignore
            src: template.preview,
            //@ts-ignore
            ...template,
        }))}
        getPreview={(item) => item.preview}
        isLoading={isLoading}
        onSelect={async (item) => {
            console.log("item", item)
          store.loadJSON(item);
        }}
        rowsNumber={1}
      />
    </div>
  );
});

// define the new custom section
export const TemplatesSection = {
  name: "custom-templates",
  // @ts-ignore
  Tab: (props) => (
    <SectionTab name="Custom templates" {...props}>
      {/* <MdPhotoLibrary /> */}
      <h1>leave</h1>
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: TemplatesPanel,
};
