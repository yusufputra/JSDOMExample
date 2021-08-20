class BookList {
  #list = [];
  constructor(title, desc) {
      if(title!=undefined & desc != undefined){
        this.#list.push({ title: title, desc: desc });
      }
  }

  getBookList() {
    return this.#list;
  }

  addBookList(title, desc) {
    this.#list.push({ title: title, desc: desc });
  }
}

