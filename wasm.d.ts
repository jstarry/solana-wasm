/* tslint:disable */
/**
*/
export class PublicKey {
  free(): void;
/**
* @param {Uint8Array} pubkey_vec 
* @returns {PublicKey} 
*/
  constructor(pubkey_vec: Uint8Array);
/**
* @param {string} pubkey_str 
* @returns {PublicKey} 
*/
  static fromString(pubkey_str: string): PublicKey;
/**
* @returns {string} 
*/
  toString(): string;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        