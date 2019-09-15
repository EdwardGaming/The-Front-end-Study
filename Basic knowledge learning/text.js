/*  闭包举例
    function user(name) {
        var age, sex;
        return {
            getName: function(){
                return name;
            },
            setName: function(newName){
                name=newName;
            },
            getAge: function(){
                return age;
            },
            setAge: function(newAge){
                age=newAge;
            },
            getSex: function(){
                return sex;
            },
            setSex: function(newSex){
                sex=newSex;
            }
        }
    }

    var whh=user('王花花');
    var name=whh.getName();
    whh.setAge(12);
    var age=whh.getAge();
    whh.setSex('女')
    var sex=whh.getSex();
    console.log(name, age, sex);
*/

/*  setTimeout(function(){
        console.log('2s到了');
    }, 2000);
*/

/*
function yo(name){
    console.log('Yo '+name+',我是'+this.name);
}
var whh={
    name: '王花花'
}
yo.call(whh,'李栓蛋');
yo.apply(whh,['李栓蛋']);
yo2 = yo.bind(whh);
yo2('李栓蛋');
*/
