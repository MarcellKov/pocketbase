migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zf5tlw9a6k25rm")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zf5tlw9a6k25rm")

  collection.listRule = null

  return dao.saveCollection(collection)
})
