import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <button className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.dark ? <DarkIcon /> : <LightIcon/>}
        </button>
    );
};