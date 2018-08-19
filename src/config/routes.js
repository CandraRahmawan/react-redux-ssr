import Dashboard from '../clients/components/dashboard/Dashboard';
import ListUsers from '../clients/components/users/ListUsers';
import AddUser from '../clients/components/users/AddUser';
import EditUser from '../clients/components/users/EditUser';
import PageNotFound from '../clients/components/errors/PageNotFound';

const routes = [
  {
    key: 'dashboard',
    path: '/',
    component: Dashboard
  },
  {
    key: 'listUsers',
    path: '/list-users',
    component: ListUsers
  },
  {
    key: 'addUser',
    path: '/add-user',
    component: AddUser
  },
  {
    key: 'editUser',
    path: '/edit-user/:id',
    component: EditUser
  },
  {
    key: 'pageNotFound',
    path: null,
    component: PageNotFound
  }
];

export default routes;
