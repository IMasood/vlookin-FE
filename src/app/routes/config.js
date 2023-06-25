const admin = {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    addBuilding: '/admin/addBuilding',
    listBuilding: '/admin/listBuilding',
    addAppartment:'admin/addApartment',
    listAppartment:'admin/listApartment'
};

const superAdmin = {
    login: 'superAdmin/login'
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list'
};

const visitor = {
    login: '/visitor/login',
    dashboard: '/visitor/dashboard',
    listVisitor: '/visitor/list',
    editVisitor: '/visitor/edit'
};
const building = {
    form: '/'
}

const upkeeper = {
    login: 'upkeeper/login'
};

const home = {
    home: '/'
}

export const apiRoutes = {
    'getUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor/createVisitor',
    'getVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor',
    'deleteVisitor' : 'https://dizzy-overcoat-moth.cyclic.app/visitor/',
    'getTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant',
    'postTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant'
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
