export function add(a: number, b: number, ...numbers: number[]): number;

export function max(arr: number[]): number | null;

export function quote(message: string): () => string;

// CaseKind won't allow the setCase function to throw an error because it only allows 'lowercase' or 'uppercase' as values
export type CaseKind = 'lowercase' | 'uppercase';
export function setCase(message: string, kind: CaseKind): string;
