export const BREADCRUMB = {
    'agreement':'Convenios',
    'convocation':'Convocatorias',
    'project':'Projectos',
    'inbox':'Bandeja de entrada',
};


export const MENU = [
{
    name: 'Configuración',
    options: [
        {
            icon: 'shared/setting',
            name: 'Convocatorias',
            path: '/configuration/convocation'
        },
        {
            icon: 'shared/setting',
            name: 'Convenios',
            path: '/configuration/agreement'
        },
        {
            icon: 'shared/setting',
            name: 'Proyectos',
            path: '/configuration/project'
        },
    ]
}]

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