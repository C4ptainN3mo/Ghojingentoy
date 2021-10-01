export default function AdminLyout({children}) {
  return (
    <div className="antialiased h-screen w-screen grid grid-cols-1 lg:grid-cols-3 bg-gray-50">
      <div className="col-start-1 lg:col-start-2 min-h-full bg-white pb-5 shadow-sm">
        {children}
      </div>
    </div>
  );
}
