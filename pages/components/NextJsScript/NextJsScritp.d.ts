import { ReactNode } from "react";

export type NextJsScriptProps = {
  src?: string;
  onError?: Function;
  children?: ReactNode;
};
