import React from "react";
import { observer } from "mobx-react-lite";
import { useInfiniteAPI } from "polotno/utils/use-api";

import { SectionTab } from "polotno/side-panel";
import MdPhotoLibrary from "@meronex/icons/md/MdPhotoLibrary";

import { ImagesGrid } from "polotno/side-panel/images-grid";

export const TemplatesPanel = observer(({ store }) => {
  // // load data
  // const { data, isLoading } = useInfiniteAPI({
  //   getAPI: ({ page }) => `templates/page${page}.json`,
  // });

  // console.log("data", data);
  const data = {
    hits: 346,
    totalPages: 12,
    items: [
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-waffle-pancake.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-waffle-pancake.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-vibes-typography.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-vibes-typography.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-thksgiving-dinner.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-thksgiving-dinner.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-sunshine-quotes.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-sunshine-quotes.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-sunday-reminder.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-sunday-reminder.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-strawberry-cake.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-strawberry-cake.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-self-quote.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-self-quote.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-recycle-compost.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-recycle-compost.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-purple-newyear.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-purple-newyear.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-party-newyear.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-party-newyear.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-homemade-bread.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-homemade-bread.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-hello-december.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-hello-december.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-hello-christmas.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-hello-christmas.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-happy-birthday.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-happy-birthday.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-green-noddles.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-green-noddles.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-fashion-sale.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-fashion-sale.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-family-christmas.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-family-christmas.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-earth-day.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-earth-day.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-cupcake-birthday.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-cupcake-birthday.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-cheers-newyear.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-cheers-newyear.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-celestial-birthday.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-celestial-birthday.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-blue-fashion.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-blue-fashion.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-birthday-greetings.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-birthday-greetings.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-instagram-post-birthday-celebration.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-instagram-post-birthday-celebration.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-25-facebook-post-financet-tips.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-25-facebook-post-financet-tips.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-16-instagram-post-winter-vibes.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-16-instagram-post-winter-vibes.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-16-instagram-post-valentines-sale.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-16-instagram-post-valentines-sale.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-16-instagram-post-travel-tourism.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-16-instagram-post-travel-tourism.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-16-instagram-post-thanksgiving-party.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-16-instagram-post-thanksgiving-party.jpg",
      },
      {
        json: "https://api.polotno.dev/templates/2021-10-16-instagram-post-red-fashion.json",
        preview:
          "https://api.polotno.dev/templates/2021-10-16-instagram-post-red-fashion.jpg",
      },
    ],
  };

  return (
    <div style={{ height: "100%" }}>
      <ImagesGrid
        shadowEnabled={false}
        images={data.items.map(item =>item)}
        // images={data?.items((item) => item.).flat()}
        getPreview={(item) => item.preview}
        isLoading={false}
        onSelect={async (item) => {
          console.log("item", item);
          // download selected json
          const req = await fetch(`${item.json}`);
          const json = await req.json();
          console.log("json", json);
          // just inject it into store
          store.loadJSON(json);
        }}
        rowsNumber={1}
      />
    </div>
  );
});

// define the new custom section
export const TemplatesSection = {
  name: "custom-templates",
  Tab: (props) => (
    <SectionTab name="Custom templates" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: TemplatesPanel,
};
