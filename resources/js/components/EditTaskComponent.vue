<template>
<div>
        <!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel"> Edit Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body">
        <form action="">
            <div class="class-group">
 <label for="name">Nom de la tâche</label>
            <textarea name="name" id="name"  rows="4" class="form-control" v-model="taskToEdit.name"></textarea>
          
            </div>
           
           
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-success" @click="update()" data-dismiss="modal">Enregistrer</button>
      </div>
    </div>
  </div>
 </div>
</div>
</template>
<script>
    export default{
  props: ['taskToEdit'],
  methods:{

      update(){
          axios.patch('http://127.0.0.1:8000/tasks/' + this.taskToEdit.id,{
              name: this.taskToEdit.name
          })
          .then(response => this.$emit('task-updated',response))
          .catch(error => console.log(error));
      }
  }
    }
</script>