import { useEffect } from "react";
import {
  checkInputScript,
  executeCode,
  getScriptFromLinks,
} from "./MextJsScriptUtils";

type NextJsScriptProps = {
  content?: string;
  src?: string;
  onError?: Function;
};
const DEFAULT_ERROR = "Error on script code";

const NextJsScript = ({ content, src, onError }: NextJsScriptProps) => {
  useEffect(() => {
    if (!content) return;
    const inputScriptChecking = checkInputScript(content);
    if (inputScriptChecking?.isError) {
      onError(inputScriptChecking ?? DEFAULT_ERROR);
    }
    executeCode(content);
  }, [content]);

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
