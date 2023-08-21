function saturdayFun(something="roller-skate") {
    return `This Saturday, I want to ${something}!`;
}
function mondayWork(somethingElse="go to the office") {
    return `This Monday, I will ${somethingElse}.`;
}
const wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`;
    }
}