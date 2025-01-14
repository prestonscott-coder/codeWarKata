// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => s.replace(/!/g,"")

//pseudo code 
// used replace to solve with regex and used it globaly
// why use it globally? becasue the question asked for all instances of exclamations to be removed. If I just had it .replace("!","") that would only remove one instance of it. 