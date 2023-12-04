const jsonArr = [
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    },
    {
      id: '100430031000112100012015',
      status: 'Clear open item',
      timestamp: '2015-01-27 23:59:59.000'
    }
  ];

const filteredArr = jsonArr.reduce((acc, current) => {
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

console.log(JSON.stringify(filteredArr));