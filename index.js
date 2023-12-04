const fs = require('fs');
const { parse } = require('csv-parse');

const records = [];
fs.createReadStream("./sapCSV.csv")
    .pipe(parse({ delimiter: ";", columns: true }))
    .on("data", function (row) {
        records.push(row);
    })
    .on("end", function () {
        console.log("finished");
        convertToJson(records);
    })
    .on("error", function (error) {
        console.log(error.message);
    });

function convertToJson(records) {
    const startTime = new Date().getTime();
    const jsonArr = [];
    records.forEach(record => {
        jsonArr.push({
            id: record.ColA,
            status: record.ColB,
            timestamp: record.ColC
        });
    });
    let jsonArrSorted = jsonArr.sort(function(a, b){
        const date1 = new Date(a.timestamp)
        const date2 = new Date(b.timestamp)      
        return date2 - date1;
    })
    const filteredArr = jsonArrSorted.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
            const newCurr = {
                id: current.id,
                processes: [{ status: current.status, timestamp: current.timestamp }],

            }
            return acc.concat([newCurr]);
        } else {
            const currData = x.processes.filter(d => d.status === current.status);
            if (!currData.length) {
                const newData = x.processes.push({ status: current.status, timestamp: current.timestamp });
                const newCurr = {
                    id: current.id,
                    status: newData,
                    timestamp: current.timestamp
                }
                return acc;
            } else {
                return acc;
            }
        }
    }, []);
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
    fs.writeFile('Output.json', JSON.stringify(filteredArr), (err) => {
        if (err) throw err;
    })
}