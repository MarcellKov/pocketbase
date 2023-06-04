migrate((db) => {
  const collection = new Collection({
    "id": "2zf5tlw9a6k25rm",
    "created": "2023-06-04 12:29:19.867Z",
    "updated": "2023-06-04 12:29:19.867Z",
    "name": "adatok",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wsd5mwsz",
        "name": "adat",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_OVQ93kx` ON `adatok` (`created`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2zf5tlw9a6k25rm");

  return dao.deleteCollection(collection);
})
