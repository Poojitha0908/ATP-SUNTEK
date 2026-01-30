//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
 //Given
      let enrollmentDeadline = new Date("2026-01-20");
//asks:
  //1.Check if:
     // * Today is before deadline → "Enrollment Open"
      //* Today is after deadline → "Enrollment Closed"
      let d=new Date(Date.now())
      if(d< enrollmentDeadline)
      {
        console.log("Enrollment Open")
      }
      else{
        console.log("Enrollment Closed")
      }
 // 2. Validate user input date:
//   * Input: "2026-02-30"
   //   * Detect whether the date is valid or invalid
   let d2=new Date('2026-02-30')