const $ = document.querySelector.bind(document);

const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-contents').children],
    openTab: $('[data-open]')
}

function TabNavigation(){
    function hideAllTabContent(){
        html.contents.forEach(section => section.style.display="none");
    }
    
    function removeAllActiveClass(){
        html.links.forEach(tab=>{
            tab.className = tab.className.replace(" active", "");
        });
    }
    
    function showCurrentTab(id){
        const tabContent = $('#'+id);
        tabContent.style.display = "block";
    }
    
    function selectTab(event){
        hideAllTabContent();
        removeAllActiveClass();

        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);

        target.className +=" active";
    }

    function listenForChange(){
        html.links.forEach(tab=>{tab.addEventListener('click', selectTab)})
    }
    
    function init(){
        hideAllTabContent();
        listenForChange();
        
        console.log(html.openTab);

        html.openTab.click();
    }
    
    return {
        init
    }
}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
   tabNavigation.init(); 
});