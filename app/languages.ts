export interface ProgrammingLanguage {
    name: string;
    items: string[];
}

export const languages: ProgrammingLanguage[] = [
    {
        name: 'Typescript',
        items: ['let', 'var', 'export', 'interface', 'type', 'class', 'const', 'const name = () => {}', 'string', 'number']
    }
];

export const words: string[] = [
    'variable', 'data', 'hidden', 'consider', 'status'
];
