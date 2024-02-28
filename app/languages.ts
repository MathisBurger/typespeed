export interface ProgrammingLanguage {
    name: string;
    items: string[];
}

export const languages: ProgrammingLanguage[] = [
    {
        name: 'Typescript',
        items: ['let', 'var', 'export', 'interface', 'type', 'class', 'const', 'const name = () => {}', 'string', 'number', 'setTimeout', 'setInterval', 'break', 'continue', 'for', 'while', 'async', 'await', 'function', 'Omit', 'Pick', 'concat', 'push', 'private', 'any', 'string[]', 'number[]', '{', '}']
    },
    {
        name: 'Java',
        items: ['String', 'Integer', 'int', 'long', 'double', 'public', 'static', 'void', 'String[]', 'new', '{', '}', 'for', 'while', 'do', 'interface', 'class', 'protected', 'this']
    },
    {
        name: 'Rust',
        items: ['for', 'let', 'mut', 'dyn', 'Box', 'while', 'Option', 'Result', 'std::', 'use', 'mod', 'fn', 'pub', 'pub(crate)']
    }
];

export const words: string[] = [
    'variable', 'data', 'hidden', 'consider', 'status', 'value', 'amount', 'start', 'bread', 'container', 'compile', 'memory', 'stack', 'heap'
];
