function multiplyValue(value:number,multiplier?:number):number{
    return multiplier === 0 || multiplier ? value * multiplier : value * 2
}

function processInput(value:string | number | boolean):string | number{
    if(typeof(value)==="string"){
        return value.trim().toLowerCase()
    }else if(typeof(value)==="boolean"){
        return value ? "Active" : "Inactive"
    }else{
        return value * 10
    }
}

function formatCoordinate([latitude, longitude, locationName]: readonly [number, number, string]):string{
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

function concatenateArrays<T>(...arrays:T[][]):T[]{
    let res:T[] = []
    arrays.forEach((arr)=>{
        res = [...res,...arr]
    })
    return res
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses:Course[],minStudents:number):Course[]{
    const popularCourses:Course[] = courses.filter((item)=>{
        return item.isPublished && item.students >= minStudents
    })

    return popularCourses
}

function pluckValues<T, K extends keyof T>(items: T[], key:K):T[K][]{
    const result:T[K][] = items.map((item)=>{
        return item[key]
    })
    return result
}

class Employee {
    protected name:string;
    private baseSalary: number;

    public constructor (name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    private department:string;
    public constructor(name: string, baseSalary: number, department: string) {
        super(name,baseSalary);
        this.department = department 
    }

    public getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
    
}

async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        } else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}
