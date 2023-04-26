type arrTaskType = Array<task>

class task {
    public uid: number
    public title: string;
    public description: string;
    public date: Date;
    public isDone: boolean;
    constructor(uid: number, title: string, description: string, date: Date, isDone: boolean) {
        this.uid = uid,
            this.title = title,
            this.description = description,
            this.date = date,
            this.isDone = isDone
    }
    public set setTiltle(newTitle: string) {
        this.title = newTitle;
    }
    public get getTitle() {
        return this.title
    }
    public set setDescription(newDescription: string) {
        this.description = newDescription;
    }
    public get getDescription() {
        return this.description;
    }
    public set setDate(newDate: Date) {
        this.date = newDate;
    }
    public get getDAte() {
        return this.date;
    }
}

const addTask = (newTask: task) => {
    for (let i = 0; i < arrTasks.length; i++) {
        if (newTask["uid"] === arrTasks[i]["uid"]) {
            return console.log('uid is dublicate');
        }
    }
    arrTasks.push(newTask);
    console.log(`${newTask.title} in ${newTask.date} is saved`);
}

const deleteTask = (uidForDelete: number) => {
    const findUid = arrTasks.findIndex(item => item.uid === uidForDelete)
    if (findUid > -1) {
        arrTasks.splice(findUid, 1)
    } else {
        console.log(`uid : ${uidForDelete} is not found`);
    }
}

const updateTask = (updateTask) => {
    const { uid, title, description, date, isDone } = updateTask;
    const findUid = arrTasks.findIndex(item => item.uid === uid);
    if (title) arrTasks[findUid].setTiltle = title;
    if (description) arrTasks[findUid].setDescription = description;
    if (date) arrTasks[findUid].setDate = date;
    if (isDone) arrTasks[findUid].isDone = isDone;
}

const showTasks = (arr, prop) => {    
    arr.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    });
    console.log(arr);
}


const arrTasks: arrTaskType = []
const now = new Date();
const test: task = new task(4, 'edsf', 'al;dksjfal;djf,', now, false);
const test1: task = new task(2, 'adsf', 'al;dksjfal;djf,', now, false);
arrTasks.push(test);
arrTasks.push(test1);
