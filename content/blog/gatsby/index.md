---
title: Learning Gatsby!
date: '2019-01-06T23:46:37.121Z'
---

onCreateNode will be called by Gatsby whenever a new node is created or updated.

What is a node?

createFilePath handles finding the parent File node along with creating the slug.

createNodeField allows you to create additional fields on nodes created by other plugins.

createPages is called so plugins can add pages.

```javascript
/**
 * @param {Object} data -
 * @data.context {Object} - Data passed to context is available in page
 * queries as GraphQL variables
 */
createPage({ path, component, context })
```
