export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { Article } from './model/types/article';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './model/selectors/articleDetails';
