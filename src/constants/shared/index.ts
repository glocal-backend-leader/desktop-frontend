export const BREADCRUMB = {
    'agreement':'Convenios',
    'convocation':'Convocatorias',
    'project':'Projectos',
    'inbox':'Bandeja de entrada',
};
const endpointTypeProcess = `${import.meta.env.API_URL}process-types`;

const getTypeProcess = await fetch(endpointTypeProcess)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const MENU = [
    ...getTypeProcess.map(process => ({
        name: process.name,
        options: [
            {
                name:"Entrante",
                path:"/convocation"
            }
        ]
    })),
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