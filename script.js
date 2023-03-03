9// let list_card = document.querySelectorAll(".list-card");
const card = document.querySelectorAll(".card");

const DATA = {
  0: {
    judul: "WPU unpas",
    link: "https://www.youtube.com/c/webprogrammingunpas",
  },
  1: {
    judul: "Kelas Terbuka",
    link: "https://www.youtube.com/@KelasTerbuka",
  },
  2:{
    judul:"Dea Afrizal",
    link: "https://www.youtube.com/@deaafrizal",
  },
  3:{
    judul:"Teknik Informatika Indonesia",
    link:"https://www.youtube.com/@TeknikInformatikaIndonesia",
  },
  4:{
    judul:"Solo Learn",
    link:"https://www.sololearn.com",
  },
  5:{
    judul:"Petani Code",
    link:"https://www.petanikode.com"
  }
};

// const screen_text = card[0].children[1].children[0].innerHTML

for(let i = 0; i < card.length; i++){
    let judul = card[i].children[1].children[0];
    let link = card[i].children[1].children[1].children[0];
    let foto = card[i].children[0].children[0]
    
    judul.innerHTML = DATA[i]["judul"];
    link.href = DATA[i]["link"];
    foto.src = `assets/img/${i}.png`
}
