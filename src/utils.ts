export const mapo = (object, callback) =>
  Object.keys(object).map(key =>
    callback(key, object[key]));

export function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach((styleSheet: any) => {
    if (styleSheet.cssRules) {
      const newStyleEl = sourceDoc.createElement("style");

      Array.from(styleSheet.cssRules).forEach((cssRule: any) => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    }
  });
}
