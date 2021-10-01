export default function Button({children, onClick, type = "Submit"}) {
    return(
        <button onClick={onClick} type={type} className="w-full py-4 bg-[#4154F1] text-white rounded-lg font-bold">
              {children}
          </button>
    )
}