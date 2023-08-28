// Function to calculate the number of days between two dates
function getDaysDifference(startDate, endDate) {
    // Convert both dates to milliseconds
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    console.log(start)
    console.log(end)
    
  
    // Calculate the difference in milliseconds
    const diffMilliseconds = end - start;
  
    // Convert milliseconds to days
    const daysDifference = diffMilliseconds / (1000 * 60 * 60 * 24);
  
    // Round the result to remove any floating-point inaccuracies
    return Math.round(daysDifference);
  }
  
  const startDate = "1994-05-20";
  const endDate = "2002-04-20";
  
  const daysDifference = getDaysDifference(startDate, endDate);
  console.log("Number of days between the two dates:", daysDifference);
  