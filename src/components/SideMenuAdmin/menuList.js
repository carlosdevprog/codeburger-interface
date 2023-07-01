import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import paths from '../../constants/paths';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

const list = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.requests,
        icon: ShoppingBagIcon
    },

    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.listProducts,
        icon: ShoppingCartIcon
    },

    {
        id: 3,
        label: 'Novo Produtos',
        link: paths.newProduct,
        icon: InventoryIcon
    },

]
export default list