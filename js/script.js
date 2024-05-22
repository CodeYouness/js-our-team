/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

/*<div class="col-4">
        <div class="card">
            <img src="./img/wayne-barnett-founder-ceo.jpg" class="card-img-top" alt="ceo">
        <div class="card-body text-center">
            <h5 class="card-title">Wayne Barnett</h5>
            <p class="card-text">Founder & CEO</p>
        </div>
    </div>
</div>*/

const ourTeam = [{
    teamName: 'Wayne Barnett',
    position: 'Founder & CEO',
    img: './img/wayne-barnett-founder-ceo.jpg'
},
{
    teamName: 'Angela Caroll',
    position: 'Chief Editor',
    img: './img/angela-caroll-chief-editor.jpg'
},
{
    teamName: 'Walter Gordon',
    position: 'Office Manager',
    img: './img/walter-gordon-office-manager.jpg'
},
{
    teamName: 'Angela Lopez',
    position: 'Social Media Manager',
    img: './img/angela-lopez-social-media-manager.jpg'
},
{
    teamName: 'Scott Estrada',
    position: 'Developer',
    img: './img/scott-estrada-developer.jpg'
},
{
    teamName: 'Barbara Ramos',
    position: 'Graphic Designer',
    img: './img/barbara-ramos-graphic-designer.jpg'
}]

const containerEL = document.querySelector('div#main-container')



for (let key in ourTeam) {
    //contenitore di tutto
    const teamEl = document.createElement('div')
    teamEl.classList.add('col-4')

    //contenitore con classe card
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')

    //contenitore immagine
    const imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top')
    imgEl.src = ourTeam[key].img

    //contenitore body della card
    const bodyCardEl = document.createElement('div')
    bodyCardEl.classList.add('card-body', 'text-center')

    //h5 della card con nome schiavo
    const teamNameEl = document.createElement('h5')
    teamNameEl.classList.add('card-title')
    teamNameEl.textContent = ourTeam[key].teamName

    //<p> della card con posto di lavoro dello schiavo
    const positionEl = document.createElement('p')
    positionEl.classList.add('card-text')

    //metto h5 e p dentro al body-card
    bodyCardEl.appendChild(teamNameEl)
    bodyCardEl.appendChild(positionEl)

    //metto img e body-card dentro al mega contenitore
    teamEl.appendChild(imgEl, bodyCardEl)

    //stampo tutto
    containerEL.appendChild(teamEl)


    console.log(ourTeam[key], bodyCardEl)
}