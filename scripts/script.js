        function clear(){
         while(divResult.firstChild) 
            divResult.removeChild(divResult.firstChild)
        }

        async function getRepos() {            
             try {
              const url = "https://api.github.com/users/rgcienfuegos/repos"
              const response = await fetch(url)
              const result = await response.json()
  
             } catch (error) {               
             }             
            return result;
            }    
         

        function getElements(result) {
        let counter = 0;

        result.forEach(i=>{                  
              
        counter=counter+1;

        let  repoHTML =`
        <h2 id='nameRepo`+counter+`'></h2>
        <p id='desRepo`+counter+`'></p>
        <p>
          <a id='butRepoDem`+counter+`' class="btn btn-secondary" href="https://rgcienfuegos.github.io/`+i.name+`//" role="button">Link demo &raquo;</a>
        </p>
        `      
        let div = document.createElement("div");                      
        div.innerHTML = repoHTML;
        div.className="col-md-4";                  
        divResult.appendChild(div)    
        let nameRepo = document.getElementById("nameRepo"+counter);  
        nameRepo.href = i.html_url;
        nameRepo.textContent = i.name;  
        let desRepo = document.getElementById("desRepo"+counter);  
        desRepo.textContent = i.description;           
                  
                      })

        }

        // Script
      
const divResult = document.getElementById("divResult");   
window.onload=getRepos();
clear();
const jsonResult = getRepos();
getElements(jsonResult);
    