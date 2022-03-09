// ! Imported array
// ! DON'T TOUCH IT
const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
];



// ***** My code *****
const rowContainer = document.getElementById('my-row');

for (let i = 0; i < team.length; i++) {
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);

    rowContainer.innerHTML += `
        <div class="col-2">
            <div class="card text-center">
                <div class="card-header">
                    <h5 id="member-name">${team[i].name}</h5>
                </div>
                <div id="description-card" class="card-body">
                    <p id="role-desc">${team[i].role}</p>
                    <img class="img-fluid" src="img/${team[i].image}" alt="${team[i].name} Image">
                </div>
            </div>
        </div>
    `
}