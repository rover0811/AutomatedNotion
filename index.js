import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

console.log(notion);
console.log(databaseId);

// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: {
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("Yurts in Big Sur, California")

(async () => {
  const pageId = 'a67e10931b53490782a1ab32750f8c7c';
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
})();

