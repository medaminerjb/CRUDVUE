<template>
    <div class="container">
    <div class="form-row">
        <div class="col-row">
    
   <input type="text" class="form-control"  @keyup="searchTask" v-model="q" placeholder="Recherche...">
    </div>

    </div>
        <add-task @task-added="refresh">
            
        </add-task>
      
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="task in tasks.data" :key="task.id">
                <a href="#">{{task.name}}</a>
               <div>
                <button type="button" class="btn btn-secondary my-3" data-toggle="modal" data-target="#editModal" @click="getTask(task.id)">
                Editer
                </button>
                <button type="button" class="btn btn-danger my-3"  @click="deleteTask(task.id)">
                Supprimer
                </button>
                </div>
           </li>
           <edit-task v-bind:taskToEdit="taskToEdit" @task-updated="refresh">

           </edit-task>

          
          </ul>
<pagination :data="tasks" @pagination-change-page="getResults" class="mt-5"></pagination>
       
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 tasks : {},
                 taskToEdit : '',
                 q : ''
            

            }
        },

    created(){

        axios.get('http://127.0.0.1:8000/tasksList')
        .then(response => this.tasks = response.data)
        .catch(error => console.log(error));

    },
    
    methods:{
        getResults(page = 1) {
			axios.get('http://127.0.0.1:8000/tasksList?page=' + page)
				.then(response => {
					this.tasks = response.data;
				});
        },
   
    getTask(id){
          	axios.get('http://127.0.0.1:8000/tasks/' + id)
				.then(response => this.taskToEdit = response.data)
                .catch(error => console.log(error));
         }, 

          deleteTask(id){
          	axios.delete('http://127.0.0.1:8000/tasks/' + id)
				.then(response => this.tasks= response.data)
                .catch(error => console.log(error));
         },

         searchTask(){ 
             if(this.q.length > 3 )
             {
                axios.get('http://127.0.0.1:8000/tasksList/' + this.q)
				.then(response =>this.tasks = response.data)
                .catch(error => console.log(error));

             }
             else {
                    axios.get('http://127.0.0.1:8000/tasksList')
        .then(response => this.tasks = response.data)
        .catch(error => console.log(error));
             }
         },

    refresh(tasks){

        this.tasks=tasks.data
    }
 },
  
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
