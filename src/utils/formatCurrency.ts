// src/utils/formatCurrency.ts

/**
 * Format angka menjadi Rupiah (IDR)
 * @param value - angka yang ingin diformat
 * @param withSymbol - jika true, menampilkan "Rp ", default true
 */
export const formatRupiah = (value: number, withSymbol: boolean = true): string => {
  if (isNaN(value)) return withSymbol ? "Rp 0" : "0";

  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

  // Hilangkan simbol jika tidak ingin "Rp"
  return withSymbol ? formatted : formatted.replace(/^Rp\s?/, "").trim();
};
