<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

window.onload = function formDate() {
  let today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  day = ('0' + day).slice(-2);
  month = ('0' + month).slice(-2);

  let printDate = `${day}/${month}/${year}`

  document.getElementById("date").innerHTML = printDate
};

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("descripcion").value = "";
  incident.name = "";
  incident.subject = "";
  incident.descripcion = "";
}

let incident = {
  name: "",
  subject: "",
  descripcion: ""
}

async function save() {
  if(incident.name=="") {
    alert("Name is needed");
    return;
  }

  if(incident.subject=="") {
    alert("Subject is needed");
    return;
  }

  if(incident.descripcion=="") {
    alert("Descripcion is needed");
    return;
  }

  const payload = JSON.stringify(this.incident);
  const url = "http://localhost:8080/support-app-myfirstcrud/api/incidents";
  const r = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json",
    }
  });
  const response = await r;
  console.log(response);
  if (response) {
    alert("Added " + incident.subject);
    resetForm();
  } else {
    alert("An error has occurred.\nPlease try again after a few minutes.");
  }
}
</script>

<template>
  <Header></Header>
  <main>
    <h2>Your new incident</h2>
    <form id="form">
      <label for="date" id="date"></label>
      <div class="form-group">
        <input v-model="incident.name" type="text" class="form-control" id="name" placeholder="Enter your name"
          required>
      </div>
      <div class="form-group">
        <input v-model="incident.subject" type="text" class="form-control form-control-lg" id="subject"
          placeholder="Write a subject" required>
      </div>
      <div class="form-group">
        <textarea v-model="incident.descripcion" class="form-control form-control-lg" id="descripcion"
          placeholder="Write your commentary" rows="3" required></textarea>

      </div>
      <div id="buttons-box">
        <button type="button" class="btn btn-danger" id="cancel">Cancel</button>
        <button type="button" class="btn btn-warning" id="reset" @click="resetForm()">Reset</button>
        <button type="button" class="btn btn-success" id="send" @click="save()">Send</button>
      </div>
    </form>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
@import '../sass/styles.scss';

main {
  margin-top: 5%;
  font-family: 'Space Mono', monospace;

  h2 {
    margin-left: 5%;
    color: $color;
    font-weight: bold;
    font-size: 2.2rem;

  }

  form {
    margin: 3%;
    display: grid;

    #date {
      margin-left: 3%;
      width: 10vw;
    }

    .form-group {
      margin: 1% 3% 1% 3%;
    }

    #buttons-box {
      display: flex;
      justify-content: flex-end;
      margin-right: 2%;

      button {
        margin: 1%;
      }
    }
  }
}
</style>