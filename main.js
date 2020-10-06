function getTodos(){
   // axios({
      //  method:'get',
       // url:'https://jsonplaceholder.typicode.com/todos',
       //// params:{
          //  _limit: 5
       // }
  //  })
   // .then(res =>console.log(res))
   // .catch(err =>console.error(err))
   axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
   .then(res =>ShowOutput(res))
   .catch(err =>console.error(err));
}
///// POST REQUESRT

function addTodo(){
   // axios({
      //  method:'post',
       // url:('http://jsonplaceholder.typicode.com/todos'),
       //// data:{
     //       _title:'new todo',
           // completed:false
       // }
    //})
   // .then(res => ShowOutput(res))
    //.catch(err =>console.log(err));
    axios.post('https://jsonplaceholder.typicode.com/todos/',{
        title:'New todo',
        completed:false
    })
    .then(res => ShowOutput(res))
    .catch(err =>console.error(err));
}
 

function updateTodo(){//we id update to 1
   axios.put('http://jsonplaceholder.typicode.com/todos/1',{
    title:'Update Todo',
    completed:true
   }) 
    .then(res => ShowOutput(res))
    .catch(err => console.error (err));
}

function removeTodo(){
axios.delete('http://jsonplaceholder.typicode.com/todos/1')
.then (res => ShowOutput(res))
.catch (err => console.error(err));
}

function getData (){
   axios.all([
    axios.get ('http://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('http://jsonplaceholder.typicode.com/posts?_limit=5')
   ])
   //.then (res =>{
      // console.log(res[0]);
       //console.log(res[1]);
       //ShowOutput(res[1]);
   .then(axios.spread((todos,posts)=>ShowOutput(posts)))
   .catch(err =>console.error(err)) 
}

////// please explain about down code


axios.interceptors.request.use(config =>{
    console.log('${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}');
})
function ShowOutput(res){

    document.getElementById('res').innerHTML = '<div class="card card-body "><h5>Status: </h5></div> '
        
}
document.getElementById('get').addEventListener('click',getTodos);
document.getElementById('post').addEventListener('click',addTodo);
document.getElementById('update').addEventListener('click',updateTodo);
document.getElementById('delete').addEventListener('click',removeTodo);
document.getElmaentById('sim').addEventListener('click',getData);
document.getElementById('headers').addEventListener('click',customHeaders);
document.getElementById('transform').addEventListener('click',transformResponse);
document.getElementById('error').addEventListener('click',errorHandling);
document.getElementById('cancel').addEventListener('click',cancelToken);