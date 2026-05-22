type Mods = Record<string, boolean | string | undefined | null>

export function classNames(cls: string, mods: Mods, addition: string[]):string {
    return [
        cls,
        ...addition,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([cl]) => cl)
    ].join(' ')
}