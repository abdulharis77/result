var a = [
    {
        name: "salim",
        result: "10",
        rollNo: i,
        institute: "SAIMS",
    },
    {
        name: "usama",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "hamza",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "bilal",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "Talha",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "Usama",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "zain",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "farhan",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "muzammil",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    },
    {
        name: "umair",
        result: "10",
        rollNo: i,
        institute: "SAIMS"
    }
]

for (var i = 0; i < a.length; i++) {
    a[i].rollNo = i + 1
}

var inp = document.getElementById("rollNumber");
var dName = document.getElementById("displayName");
var dResult = document.getElementById("displayResult");

function searchRes() {
    for (var j = 0; j < a.length; j++) {
        if (a[j].rollNo == inp.value) {
            if (a[j].result) {
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Pass"
            } else {
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Fail"
            }
        }
    }
}

console.log(a)