declare function MapToObj<K extends string | number | symbol, V>(map: Map<K, V>): Record<K, V>;

export = MapToObj;
