export default function ListItem(props) {
    return(
        <div className="border flex items-center mb-4 bg-[#F8F8F8] p-2">
        <div>
            <img className="w-20 h-24" src={props.cover} alt="" />
        </div>
        <div className="ml-5">
            <h1 className="font-semibold break-all text-[#303030]">{props.judul}</h1>
            <p className="text-xs text-[#B7B7B7]">{props.penulis}</p>
            <p className="text-sm">{props.penerbit}</p>
            <p className="text-xs text-[#545454]">Tahun {props.tahun}, {props.ketebalan} Halaman</p>
        </div>
    </div>
    )
}