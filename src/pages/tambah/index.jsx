import { useHistory } from "react-router-dom";
import AdminLyout from "../../layout/admin_layout";
import { Header, Main, Footer, Button, Input } from "../../components";
export default function TambahBuku() {
  const history = useHistory();
  return (
    <form>
      <AdminLyout>
        <Header>
          <div className="flex items-center justify-center relative">
            <button
              type="button"
              onClick={() => {
                history.push(`/daftar-buku`);
              }}
              className="absolute left-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="text-white font-semibold">Tambah Buku</p>
          </div>
        </Header>

        <Main>
          <div className="grid grid-cols-1 gap-y-3">
            <div>
              <Input placeholder="Judul Buku"></Input>
            </div>
            <div>
              <Input placeholder="Nama Penulis"></Input>
            </div>
            <div>
              <Input placeholder="Penerbit"></Input>
            </div>
            <div>
              <Input placeholder="Tahun Terbit" type="number"></Input>
            </div>
            <div>
              <Input placeholder="Banyak Halaman" type="number"></Input>
            </div>
            <div>
              <textarea
                className="w-full max-h-full px-3 py-3 rounded-md bg-[#F1F1F1] text-[#A4A4A4]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Sinopsis"
              ></textarea>
            </div>
            <div>
              <label htmlFor="cover">
                <p className="h-12 w-full flex items-center justify-center border font-bold">
                  Upload Cover
                </p>
              </label>
              <input className="hidden" id="cover" type="file" />
            </div>
          </div>
        </Main>

        <Footer>
          <Button> Upload Buku</Button>
        </Footer>
      </AdminLyout>
    </form>
  );
}
