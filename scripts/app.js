
Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el : '#vue-root',
        //app variables
        data : {
            username : 'LorenzoRottigni',
            url : `https://api.github.com/users/`,
            repos : [],
            gitToken : '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'
        },
        methods : {
            getRepos(){
                const ul = document.querySelector('ul').innerHTML = ''
                const userDir = this.url.concat(`${this.username}/repos`)
                axios.get(userDir, { 'headers': {
                        Authorization : `Bearer ${this.gitToken}`, 
                        'Content-Type': 'application/json' } 
                    }).then((response) => {
                        console.dir(response.data[10])
                        response.data.forEach(repo => {
                        this.repos.push({
                            name : repo.name,
                            description : repo.description,
                            date : repo.created_at,
                            download : repo.downloads_url
                        })
                  });
                }) 
            }
        },
        
        mounted(){ 
                this.getRepos()
        }
            
        
    })
})