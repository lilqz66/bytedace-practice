let nextArticleId = 0
export const addArticle = article => ({
  type: 'ADD_Article',
  id: nextArticleId++,
  article
})

export const editArticle = (id,article) => ({
  type: 'Edit_Article',
  id: nextArticleId++,
  article
})