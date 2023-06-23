function classifier(input){

    // initiate global variables

    let workingInput = input.slice()

    let output = {

        noOfGroups : null

    }

    let groupLimit = 3

    const thisYear = 2019

    let student;


    // automate acquiring and setting age

    function getAge(arrayOfStudents){

        arrayOfStudents.forEach(function(student){

            let Dob = new Date(student.dob)

            let yearOfBirth = Dob.getFullYear()

            let age = thisYear - yearOfBirth

            student.age = age

        })

    }




    // set age for all students

    getAge(workingInput)




    // sorting students by age in ascending order

    workingInput.sort((a, b) => a.age - b.age)




    // creating list of groups

    let groups = []




    // group students

    workingInput.forEach(function(student){

        let addedToGroup = false

        for(let i = 0; i < groups.length; i++){

            let group = groups[i]

            if(group.length < groupLimit && (student.age - group[0].age) <= 5){

                group.push(student)

                addedToGroup = true

            }

        }

        if(!addedToGroup){

            groups.push([student])

        }

    })

    // define noOfGroups

    output.noOfGroups = groups.length

    

    for(let i = 0; i < groups.length; i++){

        let groupName = "group" + (1 + i)

        output[groupName] = {

            members: groups[i],

            oldest: getOldest(groups[i]),

            sum: getSum(groups[i]),

            regNos: getRegNos(groups[i])

        }

    }

    //methods to generate properties




    //oldest student per group

    function getOldest(studentGroup){

        let maximumAge = 0

        studentGroup.forEach(function(student){

            if(student.age > maximumAge){

                maximumAge = student.age

            }

        })

        return maximumAge

    }

    //sum of ages

    function getSum(studentGroup){

        let sumOfAges = 0

        studentGroup.forEach(function(student){

            sumOfAges += student.age

        })

        return sumOfAges

    }

    //regNo in ascending order

    function getRegNos(studentGroup){

        let regNosArray = []

        studentGroup.forEach(function(student){

            regNosArray.push(Number(student.regNo))

        })

        return regNosArray.sort((a, b) => a - b)

    }




    // getting the answer

    return output
    

}
console.log(classifier); 