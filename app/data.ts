// Data Departemen
export const dataDepartemen = [
  { nama: 'Fashion', omset: 2000000, target: 2500000 },
  { nama: 'Elektronik', omset: 1500000, target: 1000000 },
  { nama: 'Grocery', omset: 1000000, target: 1200000 },
  { nama: 'Kosmetik', omset: 500000, target: 800000 },
];

// Data Individu (Staff)
export const dataIndividu = [
  { nama: 'Andi', omset: 1200000 },
  { nama: 'Budi', omset: 900000 },
  { nama: 'Citra', omset: 800000 },
  { nama: 'Dewi', omset: 700000 },
  { nama: 'Eko', omset: 500000 },
];

// Helper: format Rupiah
export function formatRupiah(angka: number) {
  return 'Rp ' + angka.toLocaleString('id-ID');
}