import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo(({
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        { value: 'asc', content: t('возрастанию') },
        { value: 'desc', content: t('убыванию') },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        { value: ArticleSortField.TITLE, content: t('названию') },
        { value: ArticleSortField.VIEWS, content: t('просмотрам') },
        { value: ArticleSortField.CREATED, content: t('дате создания') },
    ], [t]);
    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select options={sortFieldOptions} label={t('Сортировать ПО')} value={sort} onChange={onChangeSort} />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
