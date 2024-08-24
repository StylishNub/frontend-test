export default function RecentMessages() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Pesan Terakhir</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <span className="text-sm">Pesan 1: Halo, bagaimana kabarnya?</span>
          <span className="text-xs text-gray-500">5 menit lalu</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-sm">Pesan 2: Proyek sedang berjalan.</span>
          <span className="text-xs text-gray-500">10 menit lalu</span>
        </li>
        {/* Tambahkan lebih banyak pesan jika diperlukan */}
      </ul>
    </div>
  );
}
