
// Read the variable from STDIN
// process.stdin.on('data', function(chunk) {
//     var lines = chunk.toString().split('\n'),
//     a = parseInt(lines[0])
    // Output the variable to STDOUT

    const data = ['2',
        ['Ram Kumar', '134', '20.5.1994' , '20.4.2002' ],
        ['Lokesh', '134', '31.12.1995' , '21.02.2017' ]
    ]

    const custData = data.filter( (data, index) => index !== 0 );

    const dob = custData.map( data => {
        let differenceDays = []
        let dob = data.filter( (d,i) => i === 2);
        // console.log('dob',dob);
        let dobDays = dob.map( day => Number(Number(day.split('.')[0])+Number(day.split('.')[1]*30)+Number(day.split('.')[2]*30*12)));
        // console.log('dobDays',dobDays[0]);
        
        let rfd = data.filter( (d,i) => i === 3);
        // console.log('rfd',rfd)
        let rfdDays = rfd.map( r => Number(Number(r.split('.')[0]) + Number(r.split('.')[1]*30) + Number(r.split('.')[2])*30*12));
        // console.log('rfdDays',rfdDays[0])

        // console.log('Diff',Number(rfdDays.toString())- Number(dobDays.toString()));
        // console.log();
        return rfdDays[0]-dobDays[0]
    });

    console.log(dob);








    // const custData = data.filter((d,i) => i !== 0);
    
    // const dob = custData.map(data => {
        
    //     const days = data.split(',')[2].split('.');
    //     const numOFdays = days.map( day => Number(day[0].split(',')) + Number(day[1]*30) + Number(day[2]*30*12))
    //      return numOFdays
    //     //  return data.split(',')[2].split('.')
        
    //     });
    // const rpd = custData.map(data => data.split(',')[3]);

    



// var myClass1 = function(){
//     return new Number(1);
// };

// var myClass2 = function(){
//     return new Number(2);
// };

// console.log(
//     new myClass1 instanceof myClass1,
//     new myClass2 instanceof myClass2
// )