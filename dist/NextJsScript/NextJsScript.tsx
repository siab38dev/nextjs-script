import { useEffect } from "react";
import { NextJsScriptProps } from "./NextJsScritp";
import {
  checkInputScript,
  DEFAULT_ERROR,
  executeCode,
  getScriptFromLinks,
} from "./utils/MextJsScriptUtils";

const NextJsScript = ({ src, onError, children }: NextJsScriptProps) => {
  useEffect(() => {
    if (!children || typeof children !== "string") return;
    const inputScriptChecking = checkInputScript(children);
    if (inputScriptChecking?.isError) {
      onError(inputScriptChecking ?? DEFAULT_ERROR);
    }
    executeCode(children);
  }, [children]);

  useEffect(() => {
    if (!src) return;
    getScriptFromLinks(src)
      .then((content) => {
        if (!content) return;
        const inputScriptChecking = checkInputScript(content);
        if (inputScriptChecking?.isError) {
          onError(inputScriptChecking ?? DEFAULT_ERROR);
        }
        executeCode(content);
      })
      .catch((err) => {
        if (onError) onError(err);
      });
  }, [src]);

  return null;
};

export default NextJsScript;
