import coreIncludes from 'core-js/library/fn/array/includes';


/**
 * Takes two lists and returns their intersection as a list
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array} Intersected list of a and b
 */
export default function intersectLists(a, b) {
    return a.filter((val) => coreIncludes(b, val));
}
