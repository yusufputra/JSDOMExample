class BookList {
  #list = [];
  constructor(title, desc) {
    if ((title != undefined) & (desc != undefined)) {
      this.#list.push({ title: title, desc: desc });
    }
  }

  getBookList() {
    return this.#list;
  }

  addBookList(title, desc) {
    console.log("processing...")
    let countBefore = this.#list.length; //untuk menghitung nilai #list sebelum ditambahkan
    return new Promise((resolve, reject) => { //membuat promise
      setTimeout(() => { //set timeout proses
        let submit =
          (title != "") & (desc != "")
            ? this.#list.push({ title: title, desc: desc })
            : "";
        if (countBefore == submit) {
          console.log("end process...")
          reject("gagal input data"); //reject ketika prosesnya gagal atau tidak sesuai
        } else {
          console.log("end process...")
          resolve(this.#list); //resolve ketika prosesnya berhasil atau sesuai
          console.log(this.#list);
          return this.#list;
        }
      }, 1000);
    });
  }
}

module.exports = BookList; //export sebagai modul untuk testing