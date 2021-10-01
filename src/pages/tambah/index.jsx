import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
import AdminLyout from "../../layout/admin_layout";
import { Header, Main, Footer, Button, Input } from "../../components";
export default function TambahBuku() {
  const [imagePreview, setImagePreview] = React.useState("");
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    judul_buku: "",
    cover: "",
    nama_pengarang: "",
    kode_penulis: 8101,
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  const [error, setError] = React.useState({
    judul_buku: "",
    cover: "",
    nama_pengarang: "",
    kode_penulis: 8101,
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
    if (key === "judul_buku") {
      if (value === "") {
        return (error.judul_buku = "judul_buku Tidak Boleh Kosong");
      } else {
        error.judul_buku = "";
      }
    }
    if (key === "nama_penerbit_buku") {
      if (value === "") {
        return (error.nama_penerbit_buku =
          "nama_penerbit_buku Tidak Boleh Kosong");
      } else {
        error.nama_penerbit_buku = "";
      }
    }
    if (key === "nama_pengarang") {
      if (value === "") {
        return (error.nama_pengarang = "nama_pengarang Tidak Boleh Kosong");
      } else {
        error.nama_pengarang = "";
      }
    }
    if (key === "ketebalan_buku") {
      if (value === "") {
        return (error.ketebalan_buku = "ketebalan_buku Tidak Boleh Kosong");
      } else {
        error.ketebalan_buku = "";
      }
    }
    if (key === "tahun_terbit_buku") {
      if (value === "") {
        return (error.tahun_terbit_buku =
          "tahun_terbit_buku Tidak Boleh Kosong");
      } else {
        error.tahun_terbit_buku = "";
      }
    }
    if (key === "sinopsis") {
      if (value === "") {
        return (error.sinopsis = "sinopsis Tidak Boleh Kosong");
      } else if (value.replace(/\s/g, "").length < 10) {
        error.sinopsis = "sinopsis wajib 10 huruf";
      } else {
        error.sinopsis = "";
      }
    }
    disableSubmitHandle();
  };

  const disableSubmitHandle = () => {
    if (
      error.judul_buku === "" &&
      error.cover === "" &&
      error.nama_penerbit_buku === "" &&
      error.ketebalan_buku === "" &&
      error.nama_pengarang === "" &&
      error.ketebalan_buku === "" &&
      error.tahun_terbit_buku === "" &&
      error.sinopsis === ""
    ) {
      return setDisableSubmit(false);
    } else {
      return setDisableSubmit(true);
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();

    setValues((values) => ({
      ...values,
      cover: e.target.files[0],
    }));
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(imagePreview);
  };
  console.log(values);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok");
    const url = `https://api-react-2.herokuapp.com/api/perpustakaan`;

    const formData = new FormData();
    formData.append("judul_buku", values.judul_buku);
    formData.append("cover", values.cover);
    formData.append("kode_penulis", values.kode_penulis);
    formData.append("nama_pengarang", values.nama_pengarang);
    formData.append("nama_penerbit_buku", values.nama_penerbit_buku);
    formData.append("ketebalan_buku", values.ketebalan_buku);
    formData.append("tahun_terbit_buku", values.tahun_terbit_buku);
    formData.append("sinopsis", values.sinopsis);
    try {
      let result = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      console.log(result);
      console.log("nama_pengarang");
      swal("Good job!", "You clicked the button!", "success");
      history.push("/home");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  console.log(values);

  return (
    <form onSubmit={handleSubmit}>
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
              <Input
                className="border pt-3 pb-3 pl-2 bg-gray-300 rounded-md"
                onChange={handleChange}
                onBlur={handleChange}
                name="judul_buku"
                value={values.judul_buku}
                id="judul_buku"
                placeholder="Judul Buku"
              ></Input>
            </div>
            <div>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                name="nama_pengarang"
                id="nama_pengarang"
                value={values.nama_pengarang}
                placeholder="Nama Penulis"
              ></Input>
            </div>
            <div>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                name="nama_penerbit_buku"
                value={values.nama_penerbit_buku}
                id="nama_penerbit_buku"
                placeholder="Penerbit"
              ></Input>
            </div>
            <div>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                name="tahun_terbit_buku"
                value={values.tahun_terbit_buku}
                id="tahun_terbit_buku"
                placeholder="Tahun Terbit"
                type="number"
              ></Input>
            </div>
            <div>
              <Input
                onChange={handleChange}
                onBlur={handleChange}
                name="ketebalan_buku"
                value={values.ketebalan_buku}
                id="ketebalan_buku"
                placeholder="Banyak Halaman"
                type="number"
              ></Input>
            </div>
            <div>
              <textarea
                className="w-full max-h-full px-3 py-3 rounded-md bg-[#F1F1F1] text-[#A4A4A4]"
                name="sinopsis"
                id="sinopsis"
                value={values.sinopsis}
                onChange={handleChange}
                onBlur={handleChange}
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
              <input
                name="cover"
                onChange={handleUpload}
                className="hidden"
                id="cover"
                type="file"
              />
            </div>
            <div className="">
              <img
                className="h-20 w-25 sm:h-40 w-45 rounded-md"
                src={imagePreview}
                alt=""
              />
            </div>
          </div>
        </Main>

        <Footer>
          <Button
            onClick={() => {
              setIsLoading(true);
            }}
            type="submit"
            disabled={disableSubmit}
          >
            {" "}
            {isLoading ? "Mengupload buku ..." : "Upload Buku"}
          </Button>
        </Footer>
      </AdminLyout>
    </form>
  );
}
