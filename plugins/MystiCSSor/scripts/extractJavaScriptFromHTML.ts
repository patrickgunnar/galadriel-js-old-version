const extractJavaScriptFromHTML = (__htmlContent: string): string => {
    // Regular expression to extract JavaScript code
    const __regex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
    let __script = "";
    let __match: any;

    try {
        while ((__match = __regex.exec(__htmlContent))) {
            __script += __match[1] + "\n";
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return __script;
};

export { extractJavaScriptFromHTML };
