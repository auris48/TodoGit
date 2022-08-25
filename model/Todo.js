class Todo{
    _id;
    _name;
    _description;
    _priority;
    _dueDate;
    _dateCreated;
    _status;
    _user;
    
    constructor(id, name, description, priority, dueDate, status, user){
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.dateCreated = new Date();
        this.status = status;
        if (user) this.user= user;
    }


    get name(){
        return this._name;
    }
    set name(name){
        if(!name){
            throw new Error("Name is required");
        }
        this._name = name;
    }

    get description(){
        return this._description;
    }
    set description(description){
        if(!description){
            throw new Error("Description is required");
        }
        this._description = description;
    }

    get priority(){
        return this._priority;
    }
    set priority(priority){
        if(!priority){
            throw new Error("Priority is required");
        }
        this._priority = priority;
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(dueDate){
        if(!dueDate){
            throw new Error("Due date is required");
        }
        this._dueDate = dueDate;
    }

    get dateCreated(){
        return this._dateCreated;
    }

    set dateCreated(dateCreated){
        if(!dateCreated){
            throw new Error("Date created is required");
        }
        this._dateCreated = dateCreated;
    }

    get status(){
        return this._status;
    }

    set status(status){
        if(!status){
            throw new Error("Status is required");
        }
        this._status = status;
    }

    get user(){
        return this._user;
    }

    set user(user){
        this._user = user;
    }
    
    set id(id){
        this._id = id;
    }

    get id(){
        return this._id;
    }


}

module.exports = Todo;
