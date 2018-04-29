Vue.component('Todo-footer',{
    termplate: '<p>This is another global child component</p>'
})

var cmp ={
    termplate: '<p>This is another local child component</p>'
}

var app = new SVGUseElement({
    el: '#app',
    data:{
        message: 'This is a parent component'
    },

    components:{
        'my-locla-component':cmp
    }
})