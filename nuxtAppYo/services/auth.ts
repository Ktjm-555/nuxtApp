import firebase from "firebase";
import { accessorType } form "@/store";

// enum alternative
export const Provider = {
  Google: 'GOOGLE',
  twitter: 'TWITTER'
} as const;
type Provider = typeof Provider[keyof typeof Provider];
// Providerは文字列の型で、プロパティはGoogleとtwitterですよ。（変数に入れる）

type Config = {
  apiKey: string;
  authDomain: string;
}

export class Auth {
  private $accessor: typeof accessorType;
}