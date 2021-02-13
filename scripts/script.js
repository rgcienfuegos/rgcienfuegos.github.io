const divResult = document.getElementById("divResult");   
window.onload=getRepos();
function clear(){
         while(divResult.firstChild) 
            divResult.removeChild(divResult.firstChild)
        }
        async function getRepos() {
             clear();
            const url = "https://api.github.com/users/rgcienfuegos/repos"
            const response = await fetch(url)
            const result = await response.json()
            let counter = 0;
            result.forEach(i=>{             
              counter=counter+1;                        
              if (!i.fork) {
                let  repoHTML =`
                <h2 id='nameRepo`+counter+`'></h2>
                <p id='desRepo`+counter+`'></p>
                <p>
                  <a id='butRepoDem`+counter+`' class="btn btn-secondary " href="https://rgcienfuegos.github.io/`+i.name+`//" role="button">Go Demo &raquo;</a>
                  <a id='butRepoUrl`+counter+`' class="btn btn-secondary " role="button">Go Repo &raquo;</a>
                  </p>
                `       
                          let div = document.createElement("div");                      
                          div.innerHTML = repoHTML;
                          div.className="col-md-5 carta m-1 p-2 rounded text-center";                  
                          divResult.appendChild(div)    
                          let nameRepo = document.getElementById("nameRepo"+counter);  
                          nameRepo.href = i.html_url;
                          nameRepo.textContent = i.name;  
                          let desRepo = document.getElementById("desRepo"+counter);  
                          desRepo.textContent = i.description;  
                          let urlRepo = document.getElementById("butRepoUrl"+counter);  
                          urlRepo.href = i.html_url; 
                          
                         
                          
              }
                      })
                    }