/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const ourTeam = [{
    teamName: 'Wayne Barnett',
    position: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg'
},
{
    teamName: 'Angela Caroll',
    position: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg'
},
{
    teamName: 'Walter Gordon',
    position: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg'
},
{
    teamName: 'Angela Lopez',
    position: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg'
},
{
    teamName: 'Scott Estrada',
    position: 'Developer',
    img: 'scott-estrada-developer.jpg'
},
{
    teamName: 'Barbara Ramos',
    position: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg'
}]



for (let key in ourTeam) {
    console.log(ourTeam[key])
}