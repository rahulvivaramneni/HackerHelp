// assets
import { UserOutlined, GroupOutlined,UsergroupAddOutlined} from '@ant-design/icons';

// icons
const icons = {
    UserOutlined,
    GroupOutlined,UsergroupAddOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
//this.
const profiles = {
    id: 'group-profile',
    title: 'Profile',
    type: 'group',
    children: [
        {
            id: 'my-profile',
            title: 'My Profile',
            type: 'item',
            url: '/profile',
            icon: icons.UserOutlined,
            breadcrumbs: true
        },
        {
            id: 'experts',
            title: 'Mentors',
            type: 'item',
            url: '/experts',
            icon: icons.GroupOutlined,
            breadcrumbs: true
        },{
            id: 'forum',
            title: 'Forum',
            type: 'item',
            url: '/experts',
            icon: icons.UsergroupAddOutlined,
            breadcrumbs: true
        }
    ]
};

export default profiles;
