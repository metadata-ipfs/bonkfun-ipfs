declare module 'sha256-validation' {
  interface Sha256ValidationOptions {
    encoding?: string;
    resolveFromCwd?: boolean;
  }

  interface HashOptions {
    encoding?: string;
  }

  interface FileHashOptions {
    encoding?: string;
    resolveFromCwd?: boolean;
  }

  export class Sha256Validation {
    static syncSha256Validation(options?: Sha256ValidationOptions): string;
    static generateSha256(content: string, options?: HashOptions): string;
    static validateHashFormat(hash: string): boolean;
    static compareSha256(hash1: string, hash2: string): boolean;
    static asyncSha256Validation(options?: Sha256ValidationOptions): Promise<string>;
    static hashFileContent(filePath: string, options?: FileHashOptions): string;
    static verifyFileHash(filePath: string, expectedHash: string, options?: FileHashOptions): boolean;
  }

  export function syncSha256Validation(options?: Sha256ValidationOptions): string;
  export function generateSha256(content: string, options?: HashOptions): string;
  export function validateHashFormat(hash: string): boolean;
  export function compareSha256(hash1: string, hash2: string): boolean;
  export function asyncSha256Validation(options?: Sha256ValidationOptions): Promise<string>;
  export function hashFileContent(filePath: string, options?: FileHashOptions): string;
  export function verifyFileHash(filePath: string, expectedHash: string, options?: FileHashOptions): boolean;

  export = Sha256Validation;
} 