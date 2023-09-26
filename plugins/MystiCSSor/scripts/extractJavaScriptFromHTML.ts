const extractJavaScriptFromHTML = (htmlContent: string): string => {
    // Regular expression to extract JavaScript code
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
    let script = "";
    let match: any;

    try {
        while ((match = regex.exec(htmlContent))) {
            script += match[1] + "\n";
        }
    } catch (error: any) {
        console.error("An error occurred:", error);
    }

    return script;
};

export { extractJavaScriptFromHTML };
