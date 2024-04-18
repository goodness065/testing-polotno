"use client";

import React, { useEffect } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { DEFAULT_SECTIONS } from "polotno/side-panel";

import "@blueprintjs/core/lib/css/blueprint.css";

import { createStore } from "polotno/model/store";
import { TemplatesSection } from "./hi";

const store = createStore({
  key: "mhHE1ZXBhoee4hUb04DJ", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});
// const page = store.addPage();
store.addPage();


// const json = store.toJSON();



// load from JSON
// remember that "json" should be a javascript object
// if you have a json string, you may need to parse it - JSON.parse(string);
// store.loadJSON(json);

// load JSON by save previous undo history
// a user can undo this action
// store.loadJSON(json, true);

// console.log("json", json);

export const Editor = () => {
  const sections = [TemplatesSection, ...DEFAULT_SECTIONS];
  const saveDesign = () => {
    const designJson = store.toJSON();
    localStorage.setItem("design", JSON.stringify(designJson));
  };

  useEffect(() => {
    if(store){
      const designJson = localStorage.getItem("design");
      if(designJson){
        store.loadJSON(JSON.parse(designJson));
      }
    }
  }, []);

  return (
    <div>
      <div>
        <button
          className="h-10 bg-red-500 text-white text-xl font-semibold w-[180px]"
          onClick={saveDesign}
        >
          Save
        </button>
      </div>
      <PolotnoContainer
        style={{ width: "100vw", height: "calc(100vh - 40px)" }}
      >
        {/* <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap> */}
        <SidePanelWrap>
          <SidePanel
            store={store}
            //@ts-ignore
            sections={sections}
            defaultSection="custom-templates"
          />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
};

export default Editor;
