const Booklist = require("./BookList");

test("testing add book", async() => { //describe test
  let book = new Booklist("Harry Potter", "Buku Harry Potter");
  let expected = book.getBookList();
  expected.push({ title: "Sinchan", desc: "Buku Sinchan" });
  expect(await book.addBookList("Sinchan", "Buku Sinchan")).toEqual(expected); // define test case dan expected value
});
