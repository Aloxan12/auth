import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string
    text: string
    Ico: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Ico: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Ico: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Ico: ProfileIcon,
        text: 'Профайл',
    },
];