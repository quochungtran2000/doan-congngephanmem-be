const getRandomNum = () => {
    return Math.floor(Math.random() * 90 ) + 10
}

const getDatetime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let mili = now.getSeconds();
    return { year, month, date, mili }
}

module.exports = {
    getRandomNum,
    getDatetime
}