// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
const rowHTML = document.getElementById("row");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

let cartHTML = ``;
for (const member of teamMembers) {
  cartHTML += `
    <div class="col">
      <div class="card h-100">
        <img src="${member.img}" class="card-img-top" alt="${member.name}" />
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text mb-2">${member.role}</p>
          <p><a href="${member.email}" class="link">${member.email}</a></p>
        </div>
      </div>
    </div>`;
}
rowHTML.innerHTML = cartHTML;
