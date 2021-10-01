import React from "react";
import AdminLyout from "../../layout/admin_layout";
import axios from "axios";
import swal from "sweetalert";
import {
  Header,
  Main,
  Footer,
  ListItem,
  Loading,
  Button,
} from "../../components";
import { useHistory } from "react-router-dom";
export default function DaftarBuku() {
  const history = useHistory();
  const [books, setbooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getBooks = async () => {
    const url =
      "https://api-react-2.herokuapp.com/api/perpustakaan?keyword=&kode=8101";
    try {
      let respond = await axios.get(url);
      console.log(respond.data.data.data);
      setbooks(respond.data.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err, "error");
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getBooks();
  }, []);
  return (
    <AdminLyout>
      <Header>
        <div className="relative p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute text-gray-400 top-7 left-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="w-full h-10 rounded-sm pl-12"
            type="text"
            placeholder="Cari Buku ..."
          />
        </div>
      </Header>

      <Main>
        {" "}
        <h1 className="font-bold text-lg mb-5">List Buku</h1>{" "}
        {isLoading ? (
          <React.Fragment>
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
          </React.Fragment>
        ) : (
          books.map((book, index) => (
            <ListItem
              key={index}
              id={book.id}
              judul={book.judul_buku}
              penulis={book.nama_pengarang}
              penerbit={book.nama_penerbit}
              tahun={book.tahun_terbit_buku}
              ketebalan={book.ketebalan_buku}
              sinopsis={book.sinopsis}
              cover={book.cover}
              id={book.id}
            />
          ))
        )}
      </Main>

      <Footer>
        <Button
          onClick={() => {
            history.push(`/tambah-buku`);
          }}
        >
          {" "}
          Tambah Buku
        </Button>
      </Footer>
    </AdminLyout>
  );
}
