export const BREADCRUMB = {
    'agreement': 'Convenios',
    'convocation': 'Convocatorias',
    'project': 'Projectos',
    'inbox': 'Bandeja de entrada',
};
const data = {
    email: "juan@gmail.com",
    password: "juan21",
    tenant_id: "99bb1d99-60bf-464d-b8ea-3dfb01d777ca" };

const prueba = await fetch('http://172.28.20.251:3000/api/v1/user/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(async response => await response.json())
  .then(async data => await data)
  .catch(error => console.error(error));


export const MENU = [
    {
        name: prueba.menu.name,
        options: prueba.menu.options
    }
]

export const PUBLIC_ROUTES = [
    '/'
];

export const YES_NO_OPTIONS = [
    {
        id: "true",
        name: "Si",
    },
    {
        id: "false",
        name: "No",
    },
];