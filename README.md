# Skeleton project for Swagger

## Book Details
`curl -i "http://127.0.0.1:10010/books/1"`

## New Books
curl -i -X POST -d '{ "title": "Book 1", "author": "Author 1", "description": "Dummy book 1" }' -H 'Content-type: application/json' "http://127.0.0.1:10010/books"

## Book List
`curl -i -X GET "http://127.0.0.1:10010/books"`

## Delete Book
`curl -i -X DELETE "http://127.0.0.1:10010/books/1"`

## Update Book
`curl -i -X PUT -d '{ "title": "Book 1 [updated]", "author": "Author 1", "description": "Dummy book 1" }' -H 'Content-type: application/json' "http://127.0.0.1:10010/books/1"`
