const extractJSFromHTML = (htmlContent) => {
    // Regular expression to extract JavaScript code
    const jsRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
    let jsCode = "";
    let match;

    while ((match = jsRegex.exec(htmlContent))) {
        jsCode += match[1] + "\n";
    }

    return jsCode;
};

module.exports = { extractJSFromHTML };
