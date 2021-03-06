/**
 * Truncates a string at a given char index, replacing the removed text with a replacement.
 *
 * @param  {string} text        String to truncate
 * @param  {number} truncIndex  Char number at which the text should be truncated
 * @param  {String} replacement All text after truncIndex will be replaced with this string.
 *                              This string will only be used if there was text after truncIndex
 *                              (ie. the text was actually truncated).
 * @return {string}             Truncated text
 */
export default function truncateText(text, truncIndex, replacement = '...') {
    if (typeof text !== 'string') {
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('Supplied text for truncation was not a string. Ignoring...');
        }
        return text;
    } else if (typeof truncIndex !== 'number') {
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('Supplied index for truncating text was not a non-negative number. ' +
                         'Ignoring...');
        }
        return text;
    } else {
        return text.length > truncIndex ? (text.slice(0, truncIndex) + replacement) : text;
    }
}
