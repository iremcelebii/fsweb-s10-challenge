import { NOT_EKLE, NOT_SIL, FROM_LOCAL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};
//!localstorage için 1.adım
function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
//!localstorage için 4.adım
function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}
function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}
export function myReducer(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      //!localstorage için 2.adım
      localStorageStateYaz(s10chLocalStorageKey, [
        ...state.notlar,
        action.payload,
      ]);
      return { ...state, notlar: [...state.notlar, action.payload] };

    case NOT_SIL:
      const filtrelenmisNotlar = state.notlar.filter(
        (note) => note.id !== action.payload
      );
      //!localstorage için 3.adım
      localStorageStateYaz(s10chLocalStorageKey, [filtrelenmisNotlar]);

      return { ...state, notlar: filtrelenmisNotlar };
    //!localstorage için 7.adım
    case FROM_LOCAL:
      return {
        ...state,
        notlar: baslangicNotlariniGetir(s10chLocalStorageKey),
      };

    default:
      return state;
  }
}
