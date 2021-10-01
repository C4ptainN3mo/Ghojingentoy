import React from "react";
import AdminLyout from "../../layout/admin_layout";
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
  const [isFetching, setIsFetching] = React.useState(true);
  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 20000);
  });
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
        {isFetching ? <Loading /> : <ListItem />}
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
