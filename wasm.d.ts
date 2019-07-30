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
