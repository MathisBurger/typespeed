export interface ProgrammingLanguage {
    name: string;
    items: string[];
}

export const languages: ProgrammingLanguage[] = [
    {
        name: 'Typescript',
        items: ['let', 'var', 'export', 'interface', 'type', 'class', 'const', 'const name = () => {}', 'string', 'number', 'setTimeout', 'setInterval', 'break', 'continue', 'for', 'while', 'async', 'await', 'function', 'Omit', 'Pick', 'concat', 'push', 'private', 'any', 'string[]', 'number[]']
    },
    {
        name: 'Java',
        items: ['String', 'Integer', 'int', 'long', 'double', 'public', 'static', 'void', 'String[]', 'new', '{', '}', 'for', 'while', 'do', 'interface', 'class', 'protected', 'this', 'implements', 'extends']
    },
    {
        name: 'Rust',
        items: ['for', 'let', 'mut', 'dyn', 'Box', 'while', 'Option', 'Result', 'std::', 'use', 'mod', 'fn', 'pub', 'pub(crate)']
    },
    {
        name: 'Kotlin',
        items: ['fun', 'var', 'val', 'private', 'protected', 'class', 'interface', 'data class', 'static', 'Integer', 'String', 'Long', 'Double', 'Float']
    },
    {
        name: 'Go',
        items: ['package', 'import', 'func', 'type name struct', 'type', 'string', 'map[type]type', 'if err != nil', 'err error', 'interface{}', 'byte', 'int', 'var name type']
    },
    {
        name: 'PHP',
        items: ['function', 'array', 'private', 'class', 'interface', 'implements', 'abstract class', 'public function __construct() {}', 'array_filter', 'array_merge', 'int', 'float', 'bool', 'string', 'const', 'instanceof', 'readonly', 'parent::__construct();', 'foreach', 'for']
    }
];

export const words: string[] = [
    'variable', 'data', 'hidden', 'consider', 'status', 'value', 'amount', 'start', 'bread', 'container', 'compile', 'memory', 'stack', 'heap', 'analyse', 'commit', 'if', 'contains',
    'evaluate', 'add', 'remove', 'language', 'page', 'object', 'address', 'word', 'compose', 'interpreter', 'next', 'configuration', 'team', 'project'
];
