/**
 * Removes all falsy values (including coercions, ie. undefined, null, '', 0, ...) from an array.
 * Does not modify the passed in array.
 * @param  {array} l Array to sanitize
 * @return {array}   Sanitized array
 */
export default function sanitizeList(l) {
    return l.filter((val) => !!val);
}
