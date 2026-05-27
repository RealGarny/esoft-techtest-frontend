//возможно расширение типа в будущем
type QueryParamsType = Record<string, string | number>;
type BuildConfig = { item?: string; params?: QueryParamsType };
type GetterConfig = Omit<BuildConfig, 'item'>;

export type { BuildConfig, GetterConfig, QueryParamsType };
