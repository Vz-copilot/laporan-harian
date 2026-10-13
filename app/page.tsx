import { dataDepartemen, dataIndividu, formatRupiah } from './data';
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Daily Report J346
        </h1>
        <p className="text-slate-500 mt-1">
          Update terakhir: 13 Oktober 2026
        </p>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-slate-500">Sales Hari Ini</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">Rp 5.000.000</p>
          <p className="text-sm text-green-600 mt-1">▲ 12% vs kemarin</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-slate-500">Sales</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">Rp 3.000.000</p>
          <p className="text-sm text-green-600 mt-1">▲ 8% vs kemarin</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-slate-500">Derivatif</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">Rp 1.000.000</p>
          <p className="text-sm text-red-600 mt-1">▼ 3% vs kemarin</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-slate-500">Comser</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">Rp 1.000.000</p>
          <p className="text-sm text-green-600 mt-1">▲ 5% vs kemarin</p>
        </div>
      </div>

      {/* PROGRESS MTD */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <p className="text-sm text-slate-500 mb-2">Progress MTD — Day 13 / 31</p>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div className="bg-blue-500 h-3 rounded-full" style={{ width: '42%' }}></div>
        </div>
        <p className="text-sm text-slate-600 mt-2">42% bulan berjalan</p>
            {/* TABEL DEPARTEMEN */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Performa Departemen</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-slate-500 border-b">
              <th className="pb-2">Departemen</th>
              <th className="pb-2 text-right">Omset</th>
              <th className="pb-2 text-right">Target</th>
              <th className="pb-2 text-right">Capaian</th>
              <th className="pb-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataDepartemen.map((dept) => {
              const capaian = (dept.omset / dept.target) * 100;
              return (
                <tr key={dept.nama} className="border-b last:border-0">
                  <td className="py-3 font-medium text-slate-800">{dept.nama}</td>
                  <td className="py-3 text-right text-slate-700">{formatRupiah(dept.omset)}</td>
                  <td className="py-3 text-right text-slate-500">{formatRupiah(dept.target)}</td>
                  <td className="py-3 text-right font-semibold text-slate-800">
                    {capaian.toFixed(1)}%
                  </td>
                  <td className="py-3 text-right">
                    {capaian >= 100 ? (
                      <span className="text-green-600 font-medium">✅ Tercapai</span>
                    ) : capaian >= 80 ? (
                      <span className="text-yellow-600 font-medium">⚠️ Hampir</span>
                    ) : (
                      <span className="text-red-600 font-medium">❌ Kurang</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
            {/* TABEL INDIVIDU */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Leaderboard Staff</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-slate-500 border-b">
              <th className="pb-2">Rank</th>
              <th className="pb-2">Nama</th>
              <th className="pb-2 text-right">Omset</th>
              <th className="pb-2 text-right">Kontribusi</th>
            </tr>
          </thead>
          <tbody>
            {dataIndividu.map((staff, index) => {
              const totalOmset = dataIndividu.reduce((sum, s) => sum + s.omset, 0);
              const kontribusi = (staff.omset / totalOmset) * 100;
              const medali = ['🥇', '🥈', '🥉'][index] || `#${index + 1}`;
              return (
                <tr key={staff.nama} className="border-b last:border-0">
                  <td className="py-3 text-2xl">{medali}</td>
                  <td className="py-3 font-medium text-slate-800">{staff.nama}</td>
                  <td className="py-3 text-right text-slate-700">{formatRupiah(staff.omset)}</td>
                  <td className="py-3 text-right text-slate-600">{kontribusi.toFixed(1)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}