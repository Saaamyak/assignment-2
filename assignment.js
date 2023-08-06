function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // Helper function to insert a span tag with a given class around the specified position
    function insertSpanTag(text, start, end, className) {
        return text.slice(0, start) + `<span class="${className}">` + text.slice(start, end) + '</span>' + text.slice(end);
    }

    // Sort the plainTextPositions array in descending order of positions to avoid conflicts during insertion
    plainTextPositions.sort((a, b) => b.start - a.start);

    // Apply highlighting to htmlContent
    for (const position of plainTextPositions) {
        const { start, end } = position;
        const className = 'highlighted'; // You can change this class name to match your CSS style

        // Highlight the plainText within htmlContent
        htmlContent = insertSpanTag(htmlContent, start, end, className);
    }

    return htmlContent;
}



const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects...</span></p>';
// Your actual HTML content
const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects...';
// Your actual plain text
const plainTextPositions = [
    {
        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
]; // Your actual plainTextPositions

const highlightedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedHTML);