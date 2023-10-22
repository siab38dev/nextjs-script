const ERROR_CODES = {
  RemoveDownloadEvent: `Remove "DOMContentLoaded" listener from the js code`,
};

export const getScriptFromLinks = async (url: string): Promise<string> => {
  try {
    let response = await fetch(url);
    let text = "";
    if (response.ok) {
      text = await response.text();
    }
    return text;
  } catch (err) {
    throw err;
  }
};

export const checkInputScript = (
  script: string
): { isError: boolean; message: string } => {
  if (script && script.indexOf("DOMContentLoaded") !== -1) {
    return {
      isError: true,
      message: ERROR_CODES.RemoveDownloadEvent,
    };
  }
  return { isError: false, message: "" };
};

export const executeCode = (code: string): void => {
  const codeToExecute = new Function(code);
  codeToExecute();
};
