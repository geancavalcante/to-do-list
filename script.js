let tasks = []

let task = document.getElementById("task")
task.addEventListener('click', append_task)
task.addEventListener('click',append_task_in_document)



function append_task(){

        let task_name = document.getElementById("task_name").value

        tasks.push(task_name)

        
        
}


function append_task_in_document(){


       let text = document.createElement('p')
       text.classList = 'text1'

       let conteiner1 = document.getElementById('conteiner')
       let conteiner2 = document.createElement('div')
       conteiner2.classList = 'conteiner-2'

       let barra = document.createElement('hr')

       let button_confirm = document.createElement('div')
       button_confirm.id = 'button-confirm'
       button_confirm.innerHTML = '✔️'
       button_confirm.style.marginTop = "15px"
       button_confirm.style.marginRight = "9PX"

       button_confirm.addEventListener('click', function teste(){
            text.style.textDecoration = 'line-through'
            text.style.color = 'gray'     
       })

       let  button_delet = document.createElement('div')
       button_delet.id = 'button-delet'
       button_delet.innerHTML = '❌'
       button_delet.style.marginTop = "15px"

       button_delet.addEventListener('click', function teste1(){
        conteiner1.removeChild(conteiner2)
        conteiner1.removeChild(barra)
        tasks.pop()
       })

       
       for(let tarefa in tasks){
          text.innerHTML = `<strong> . </strong>${tasks[tarefa]}`

          conteiner2.appendChild(text)
          conteiner2.appendChild(button_confirm)
          conteiner2.appendChild(button_delet)
          conteiner1.appendChild(conteiner2)
          conteiner1.appendChild(barra)

       }


       
       

       
     
       

       

       
}


